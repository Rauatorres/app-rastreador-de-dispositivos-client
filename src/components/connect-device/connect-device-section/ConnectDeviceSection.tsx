// import { useContext } from "react";
// import ConnectContext from "../../../shared/context/connect/ConnectContext";
import ConnectDeviceForm from "../connect-device-form/ConnectDeviceForm";
import ConnectedDeviceScreen from "../connected-device-screen/ConnectedDeviceScreen";
import { useCookies } from "react-cookie";

export default function ConnectDeviceSection() {
  const [cookie] = useCookies(["connectionId"]);

  return (
    <section>
      {cookie.connectionId ? <ConnectedDeviceScreen /> : <ConnectDeviceForm />}
    </section>
  );
}
