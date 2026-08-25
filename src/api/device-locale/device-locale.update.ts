import axios from "axios";
import type ApiResponse from "../../model/apiResponse";
import { configs } from "../configs/configs";
import type DeviceLocale from "../../model/deviceLocale";

export default async function deviceLocaleUpdate(
  id: string,
  data: Partial<DeviceLocale>,
) {
  return (await axios.patch(configs.url + `device-locale/${id}`, data))
    .data as ApiResponse;
}
