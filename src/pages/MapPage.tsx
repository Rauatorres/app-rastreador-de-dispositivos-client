import { useEffect, useState } from "react";
import getConnectedDevices from "../api/get-connected-devices";
import ConnectedDeviceCard from "../components/map/ConnectedDeviceCard";
import type ConnectionData from "../model/connectionData";
import {
  APIProvider,
  Map,
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

  return (
    <main>
      <h2>Mapa</h2>
      <div
        className="
        w-150 h-100
      "
      >
        <APIProvider apiKey="AIzaSyAVbkHnA-UrQhYf_DL7Yk8uvJWB5rfTj0g">
          <Map
            // className="w-90 h-90"
            // style={{ width: "20rem", height: "20rem" }}
            defaultCenter={{ lat: 22.54992, lng: 0 }}
            defaultZoom={3}
            gestureHandling="greedy"
            disableDefaultUI
          />
          {/* <Map
            // className="w-90 h-90"
            // style={{ width: "20rem", height: "20rem" }}
            defaultCenter={{
              lat: connectedDevices[0].locale.latitude,
              lng: connectedDevices[0].locale.longitude,
            }}
            defaultZoom={3}
            gestureHandling="greedy"
            disableDefaultUI
          /> */}
        </APIProvider>
      </div>
      <h2>Dispositivos Conectados</h2>
      <div>{showConnectedDevices()}</div>
    </main>
  );
}
