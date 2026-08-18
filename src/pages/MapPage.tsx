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

  function showMap() {
    if (connectedDevices.length > 0) {
      console.log(connectedDevices);

      return (
        <Map
          // className="w-90 h-90"
          // style={{ width: "20rem", height: "20rem" }}
          defaultCenter={{
            lat: connectedDevices[0].locale.lat,
            lng: connectedDevices[0].locale.lng,
          }}
          defaultZoom={10}
          gestureHandling="greedy"
          mapId="90dd261c43affd40955eb3a4"
          disableDefaultUI
        >
          <AdvancedMarker position={connectedDevices[0].locale}>
            <Pin background={"#e42d2d"} />
          </AdvancedMarker>
        </Map>
      );
    }
  }

  return (
    <main>
      <h2>Mapa</h2>
      <div
        className="
        w-150 h-100
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
      <h2>Dispositivos Conectados</h2>
      <div>{showConnectedDevices()}</div>
    </main>
  );
}
