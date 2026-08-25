import axios from "axios";
import type ApiResponse from "../../model/apiResponse";
import { configs } from "../configs/configs";

export default async function getConnectedDevices() {
  return (await axios.get(configs.url + `connection-configs`))
    .data as ApiResponse;
}
