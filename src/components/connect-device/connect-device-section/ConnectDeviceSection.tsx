import { useContext } from "react";
import ConnectContext from "../../../shared/context/connect/ConnectContext";
import ConnectDeviceForm from "../connect-device-form/ConnectDeviceForm";
import ConnectedDeviceScreen from "../connected-device-screen/ConnectedDeviceScreen";

export default function ConnectDeviceSection() {
  const { isDeviceConnected } = useContext(ConnectContext);

  return (
    <section>
      {isDeviceConnected ? <ConnectedDeviceScreen /> : <ConnectDeviceForm />}
    </section>
  );
}
