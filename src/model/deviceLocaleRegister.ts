import type ConnectionData from "./connectionData";

export interface DeviceLocaleRegister {
  id?: string;
  date: string;
  connectionConfigs: ConnectionData;
}
