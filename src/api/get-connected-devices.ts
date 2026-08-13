import axios from "axios";
import type ApiResponse from "../model/apiResponse";

export default async function getConnectedDevices(url: string) {
  return (await axios.get(url + `connected_devices`)).data as ApiResponse;
}
