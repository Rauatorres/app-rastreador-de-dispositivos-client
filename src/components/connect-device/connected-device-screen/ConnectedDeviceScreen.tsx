import { useContext } from "react";
import ConnectContext from "../../../shared/context/connect/ConnectContext";
import disconnect from "../../../api/disconnect";

export default function ConnectedDeviceScreen() {
  const { disconnectDevice, connectedUrl, connectedDeviceId } =
    useContext(ConnectContext);

  async function disconnectDeviceFromUrl() {
    const res = await disconnect(connectedUrl, connectedDeviceId);
    if (res.success) {
      console.log(res.msg);
      disconnectDevice();
    } else {
      console.log(res.error);
      console.log(connectedDeviceId);
    }
  }

  return (
    <div>
      <h2>Dispositivo conectado</h2>
      <button onClick={disconnectDeviceFromUrl}>Desconectar</button>
    </div>
  );
}
