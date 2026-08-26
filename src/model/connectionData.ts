import type DeviceLocale from "./deviceLocale";

export default interface ConnectionData {
  id?: string;
  name: string;
  deviceLocale: DeviceLocale;
}
