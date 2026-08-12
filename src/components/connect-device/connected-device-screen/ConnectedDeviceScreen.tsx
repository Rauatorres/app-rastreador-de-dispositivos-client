import { useContext } from "react";
import ConnectContext from "../../../shared/context/connect/ConnectContext";

export default function ConnectedDeviceScreen() {
  const { disconnectDevice } = useContext(ConnectContext);

  return (
    <div>
      <h2>Dispositivo conectado</h2>
      <button onClick={() => disconnectDevice()}>Desconectar</button>
    </div>
  );
}
