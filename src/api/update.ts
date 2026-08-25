import axios from "axios";
import type ConnectionData from "../model/connectionData";
import type ApiResponse from "../model/apiResponse";
import { connectionConfigs } from "./connection-configs";

export default async function update(
  connectionId: string,
  data: Partial<ConnectionData>,
) {
  return (
    await axios.patch(
      connectionConfigs.url + `connection-configs/${connectionId}`,
      data,
    )
  ).data as ApiResponse;
}
