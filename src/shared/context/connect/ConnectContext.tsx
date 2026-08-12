import { createContext } from "react";

type ConnectContextValue = {
  isDeviceConnected: boolean;
  connectedUrl: string;
  connectedDeviceId: string;
  connectDevice: (url: string, deviceId: string) => void;
  disconnectDevice: () => void;
};

const defaultValue = {
  isDeviceConnected: false,
  connectedUrl: "",
  connectedDeviceId: "",
  connectDevice: () => {},
  disconnectDevice: () => {},
};

const ConnectContext = createContext<ConnectContextValue>(defaultValue);

export default ConnectContext;
