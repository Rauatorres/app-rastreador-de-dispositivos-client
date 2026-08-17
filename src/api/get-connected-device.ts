import axios from "axios";
import type ApiResponse from "../model/apiResponse";
import { connectionConfigs } from "./connection-configs";

export default async function getConnectedDevice(connectionId: string) {
  // console.log(url + `connected_device/${connectionId}`);
  return (
    await axios.get(connectionConfigs.url + `connected_device/${connectionId}`)
  ).data as ApiResponse;
}
