import { useEffect, useState } from "react";
import getConnectedDevices from "../api/get-connected-devices";
import ConnectedDeviceCard from "../components/map/ConnectedDeviceCard";
import type ConnectionData from "../model/connectionData";

export default function MapPage() {
    const [connectedDevices, setConnectedDevices] = useState<ConnectionData[]>([])

    useEffect(() => {
      async function registerConnectedDevices(){
        const getConnectedDevicesRequest = (await getConnectedDevices("http://192.168.0.115:3000/"))

        if(getConnectedDevicesRequest.success){
          setConnectedDevices(getConnectedDevicesRequest
            .result! as ConnectionData[]
          )
          console.log(getConnectedDevicesRequest.msg)
        } else{
          console.log(getConnectedDevicesRequest.error)
        }

      }
      registerConnectedDevices()
    }, [])

  function showConnectedDevices() {
    
        
        return connectedDevices.map((device) => {
          return (
            <ConnectedDeviceCard
            key={device.connectionId}
              name={device.name}
              connectionId={device.connectionId}
            />
          );
        });
  }

  return (
    <main>
      <h2>Dispositivos Conectados</h2>
      <div>{showConnectedDevices()}</div>
    </main>
  );
}
