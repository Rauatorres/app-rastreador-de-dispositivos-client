import { useState, type ReactNode } from "react";
import ConnectContext from "./ConnectContext";

type ConnectContextWrapperProps = {
  children: ReactNode;
};

export default function ConnectContextWrapper(
  props: ConnectContextWrapperProps,
) {
  const [isDeviceConnected, setIsDeviceConnected] = useState(false);
  const [connectedUrl, setConnectedUrl] = useState("");
  const [connectedDeviceId, setConnectedDeviceId] = useState("");

  function connectDevice(url: string, deviceId: string) {
    setIsDeviceConnected(true);
    setConnectedUrl(url);
    setConnectedDeviceId(deviceId);
  }

  function disconnectDevice() {
    setIsDeviceConnected(false);
    setConnectedUrl("");
    setConnectedDeviceId("");
  }

  return (
    <ConnectContext.Provider
      value={{
        isDeviceConnected,
        connectedUrl,
        connectedDeviceId,
        connectDevice,
        disconnectDevice,
      }}
    >
      {props.children}
    </ConnectContext.Provider>
  );
}
