import { useState, type ReactNode } from "react";
import ConnectContext from "./ConnectContext";

type ConnectContextWrapperProps = {
  children: ReactNode;
};

export default function ConnectContextWrapper(
  props: ConnectContextWrapperProps,
) {
  const [isDeviceConnected, setIsDeviceConnected] = useState(false);

  function connectDevice() {
    setIsDeviceConnected(true);
  }

  function disconnectDevice() {
    setIsDeviceConnected(false);
  }

  return (
    <ConnectContext.Provider
      value={{
        isDeviceConnected,
        connectDevice,
        disconnectDevice,
      }}
    >
      {props.children}
    </ConnectContext.Provider>
  );
}
