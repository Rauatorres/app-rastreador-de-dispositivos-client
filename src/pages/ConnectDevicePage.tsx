// import ConnectDeviceForm from "../components/connect-device/connect-device-form/ConnectDeviceForm";
import ConnectDeviceSection from "../components/connect-device/connect-device-section/ConnectDeviceSection";
import ConnectContextWrapper from "../shared/context/connect/ConnectContextWrapper";

export default function ConnectDevicePage() {
  return (
    <main>
      <ConnectContextWrapper>
        <ConnectDeviceSection />
      </ConnectContextWrapper>
    </main>
  );
}
