import axios from "axios";
import type ApiResponse from "../model/apiResponse";
import { connectionConfigs } from "./connection-configs";

export default async function getConnectedDevices() {
  return (await axios.get(connectionConfigs.url + `connected_devices`))
    .data as ApiResponse;
}
