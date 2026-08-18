import { useEffect, useState } from "react";
import getConnectedDevices from "../api/get-connected-devices";
import ConnectedDeviceCard from "../components/map/ConnectedDeviceCard";
import type ConnectionData from "../model/connectionData";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
  // type MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";

export default function MapPage() {
  const [connectedDevices, setConnectedDevices] = useState<ConnectionData[]>(
    [],
  );

  useEffect(() => {
    async function registerConnectedDevices() {
      const getConnectedDevicesRequest = await getConnectedDevices();

      if (getConnectedDevicesRequest.success) {
        setConnectedDevices(
          getConnectedDevicesRequest.result! as ConnectionData[],
        );
        console.log(getConnectedDevicesRequest.msg);
      } else {
        console.log(getConnectedDevicesRequest.error);
      }
    }
    registerConnectedDevices();
    setInterval(() => {
      registerConnectedDevices();
    }, 2000);
  }, []);

  function showConnectedDevices() {
    return connectedDevices.map((device) => {
      return (
        <ConnectedDeviceCard
          key={device.connectionId}
          name={device.name}
          connectionId={device.connectionId!}
          locale={device.locale}
        />
      );
    });
  }

  function showConnectedDevicesMarkers() {
    return connectedDevices.map((device) => {
      return (
        <AdvancedMarker title={device.name} position={device.locale}>
          <Pin background={"#e42d2d"} />
        </AdvancedMarker>
      );
    });
  }

  function showMap() {
    if (connectedDevices.length > 0) {
      return (
        <Map
          // className="w-90 h-90"
          // style={{ width: "20rem", height: "20rem" }}
          defaultCenter={{
            lat: connectedDevices[0].locale.lat,
            lng: connectedDevices[0].locale.lng,
          }}
          defaultZoom={15}
          gestureHandling="greedy"
          mapId="90dd261c43affd40955eb3a4"
          disableDefaultUI
        >
          {/* <AdvancedMarker position={connectedDevices[0].locale}>
            <Pin background={"#e42d2d"} />
          </AdvancedMarker> */}
          {showConnectedDevicesMarkers()}
        </Map>
      );
    }
  }

  return (
    <main className="p-5 flex flex-col gap-10">
      <div>
        <h2>Mapa</h2>
        <div
          className="
        lg:w-150 sm:w-115 w-75 h-100
        my-5
      "
        >
          <APIProvider apiKey="AIzaSyAVbkHnA-UrQhYf_DL7Yk8uvJWB5rfTj0g">
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
      </div>
      <div>
        <h2 className="text-xl">Dispositivos Conectados</h2>
        <div className="my-10 flex gap-5">{showConnectedDevices()}</div>
      </div>
    </main>
  );
}
