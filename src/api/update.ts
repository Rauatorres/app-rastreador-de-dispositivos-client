import axios from "axios";
import type ConnectionData from "../model/connectionData";
import type ApiResponse from "../model/apiResponse";

export default async function update(
  url: string,
  connectionId: string,
  data: Partial<ConnectionData>,
) {
  return (await axios.patch(url + `update_device/${connectionId}`, data))
    .data as ApiResponse;
}
