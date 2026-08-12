import { createContext } from "react";

type ConnectContextValue = {
  isDeviceConnected: boolean;
  connectDevice: () => void;
  disconnectDevice: () => void;
};

const defaultValue = {
  isDeviceConnected: false,
  connectDevice: () => {},
  disconnectDevice: () => {},
};

const ConnectContext = createContext<ConnectContextValue>(defaultValue);

export default ConnectContext;
