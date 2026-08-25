import axios from "axios";
// import type ApiResponse from "../model/apiResponse";
import { connectionConfigs } from "./connection-configs";
import type ConnectionData from "../model/connectionData";

export default async function getConnectedDevice(connectionId: string) {
  // console.log(url + `connected_device/${connectionId}`);
  try {
    return (
      await axios.get(
        connectionConfigs.url + `connection-configs/${connectionId}`,
      )
    ).data as ConnectionData;
  } catch (error) {
    console.log(error);
  }
}
