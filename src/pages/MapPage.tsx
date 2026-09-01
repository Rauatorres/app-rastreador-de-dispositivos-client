import { useEffect, useState } from "react";
import getConnectedDevices from "../api/connection-configs/connection-configs.get-connected-devices";
import ConnectedDeviceCard from "../components/map/connected-device-card/ConnectedDeviceCard";
import type ConnectionData from "../model/connectionData";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
  Polyline,
  // type MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import ConnectedDevicesHistory from "../components/map/connected-devices-history/ConnectedDevicesHistory";
import type { DeviceLocaleRegister } from "../model/deviceLocaleRegister";
import getAllDeviceLocaleHistory from "../api/device-locale-history/device-locale-history.getAll";

export default function MapPage() {
  const [connectedDevices, setConnectedDevices] = useState<ConnectionData[]>(
    [],
  );
  const [devicesLocaleHistoryToday, setDevicesLocaleHistoryToday] = useState<
    DeviceLocaleRegister[]
  >([]);

  useEffect(() => {
    async function registerConnectedDevices() {
      const getConnectedDevicesRequest = await getConnectedDevices();

      // if (getConnectedDevicesRequest.success) {
      //   setConnectedDevices(
      //     getConnectedDevicesRequest.result! as ConnectionData[],
      //   );
      //   console.log(getConnectedDevicesRequest.msg);
      // } else {
      //   console.log(getConnectedDevicesRequest.error);
      // }
      // console.log("connectedDevices:", connectedDevices);

      if (getConnectedDevicesRequest) {
        setConnectedDevices(getConnectedDevicesRequest as ConnectionData[]);
      }
    }
    registerConnectedDevices();
    const interval = setInterval(() => {
      registerConnectedDevices();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    async function settingDevicesLocaleHistory() {
      setInterval(async () => {
        const getDevicesLocaleHistory = await getAllDeviceLocaleHistory();
        setDevicesLocaleHistoryToday(
          getDevicesLocaleHistory.filter((register) => {
            const date = new Date(register.date);
            const today = new Date();

            return date.getDate() == today.getDate();
          }),
        );
      }, 5000);
    }
    settingDevicesLocaleHistory();
  }, []);

  function showConnectedDevices() {
    return connectedDevices.map((device) => {
      return (
        <ConnectedDeviceCard
          key={device.id}
          name={device.name}
          connectionId={device.id!}
          locale={device.deviceLocale}
        />
      );
    });
  }

  function showConnectedDevicesMarkers() {
    return connectedDevices.map((device) => {
      return (
        <AdvancedMarker title={device.name} position={device.deviceLocale}>
          <Pin background={"#e42d2d"} />
        </AdvancedMarker>
      );
    });
  }

  function showDevicesPath() {
    const connectedDevicesTodayPathRegister = connectedDevices.map((device) => {
      return devicesLocaleHistoryToday.filter(
        (register) => register.connectionConfigs.id == device.id,
      );
    });

    const devicesPath = connectedDevicesTodayPathRegister.map(
      (deviceRegisters) => {
        return deviceRegisters.map((deviceRegister) => {
          return {
            lat: deviceRegister.connectionConfigs.deviceLocale.lat,
            lng: deviceRegister.connectionConfigs.deviceLocale.lng,
          };
        });
      },
    );
    // console.log(devicesPath);

    return devicesPath.map((locale) => {
      return (
        <Polyline
          path={locale}
          strokeColor="#5eccff"
          strokeOpacity={0.8}
          strokeWeight={5}
        />
      );
    });
  }

  function showMap() {
    // if (connectedDevices.length > 0) {
    return (
      <Map
        // className="w-90 h-90"
        style={{ width: "100%", height: "100%" }}
        defaultCenter={{
          lat:
            connectedDevices.length > 0
              ? connectedDevices[0].deviceLocale.lat
              : -11.382667,
          lng:
            connectedDevices.length > 0
              ? connectedDevices[0].deviceLocale.lng
              : -41.829304,
        }}
        defaultZoom={15}
        gestureHandling="greedy"
        mapId="90dd261c43affd40955eb3a4"
        disableDefaultUI
      >
        {/* <AdvancedMarker position={connectedDevices[0].locale}>
            <Pin background={"#e42d2d"} />
          </AdvancedMarker> */}
        {showDevicesPath()}
        {showConnectedDevicesMarkers()}
      </Map>
    );
    // }
  }

  // function showMap() {
  //   return (
  //     <Map
  //       style={{ width: "100%", height: "100%" }}
  //       defaultCenter={{
  //         lat: -11.382667,
  //         lng: -41.829304,
  //       }}
  //       defaultZoom={15}
  //       gestureHandling="greedy"
  //       disableDefaultUI
  //     />
  //   );
  // }

  return (
    <main className="p-5 flex flex-col gap-10">
      <section>
        <h2>Mapa</h2>
        <div
          className="
        lg:w-150 sm:w-115 w-75 h-100
        my-5
      "
        >
          {/* <div className="w-full max-w-[600px] h-[500px] my-5"> */}
          <APIProvider
            apiKey="AIzaSyAVbkHnA-UrQhYf_DL7Yk8uvJWB5rfTj0g"
            // onLoad={() => console.log("Google Maps carregou!")}
            // onError={(error) => console.error("Erro Google Maps:", error)}
          >
            {/* <Map
            // className="w-90 h-90"
            // style={{ width: "20rem", height: "20rem" }}
            defaultCenter={{ lat: 22.54992, lng: 0 }}
            defaultZoom={3}
            gestureHandling="greedy"
            disableDefaultUI
          /> */}
            {showMap()}
          </APIProvider>
        </div>
      </section>
      <section>
        <h2 className="text-xl">Dispositivos Conectados</h2>
        <div className="my-10 flex gap-5">{showConnectedDevices()}</div>
      </section>
      <ConnectedDevicesHistory />
    </main>
  );
}
