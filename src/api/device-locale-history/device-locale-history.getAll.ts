import axios from "axios";
import { configs } from "../configs/configs";
import type { DeviceLocaleRegister } from "../../model/deviceLocaleRegister";

export default async function getAllDeviceLocaleHistory() {
  return (await axios.get(configs.url + `device-locale-history`))
    .data as DeviceLocaleRegister[];
}
