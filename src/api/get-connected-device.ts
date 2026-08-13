import axios from "axios";
import type ApiResponse from "../model/apiResponse";

export default async function getConnectedDevice(
  url: string,
  connectionId: string,
) {
  // console.log(url + `connected_device/${connectionId}`);
  return (await axios.get(url + `connected_device/${connectionId}`))
    .data as ApiResponse;
}
