// import ConnectDeviceForm from "../components/connect-device/connect-device-form/ConnectDeviceForm";
import { CookiesProvider } from "react-cookie";
import ConnectDeviceSection from "../components/connect-device/connect-device-section/ConnectDeviceSection";

export default function ConnectDevicePage() {
  return (
    <main>
      <CookiesProvider>
        <ConnectDeviceSection />
      </CookiesProvider>
    </main>
  );
}
