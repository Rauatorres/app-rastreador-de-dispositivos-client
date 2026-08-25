import axios from "axios";
import type ConnectionData from "../../model/connectionData";
import type ApiResponse from "../../model/apiResponse";
import { configs } from "../configs/configs";

export default async function connectionConfigsUpdate(
  connectionId: string,
  data: Partial<ConnectionData>,
) {
  return (
    await axios.patch(configs.url + `connection-configs/${connectionId}`, data)
  ).data as ApiResponse;
}
