import getConnectedDevices from "../api/get-connected-devices";
import ConnectedDeviceCard from "../components/map/ConnectedDeviceCard";
import type ConnectionData from "../model/connectionData";

export default function MapPage() {
  async function showConnectedDevices() {
    const connectedDevices = (await getConnectedDevices("http://127.0.0.1/"))
      .result! as ConnectionData[];
    return connectedDevices.map((device) => {
      return (
        <ConnectedDeviceCard
          name={device.name}
          connectionId={device.connectionId}
        />
      );
    });
  }

  return (
    <main>
      <h2>Dispositivos Conectados</h2>
      <div></div>
    </main>
  );
}
