import axios from "axios";
import type ConnectionData from "../model/connectionData";
// import type ApiResponse from "../model/apiResponse";
import { connectionConfigs } from "./connection-configs";

export default async function connect(data: ConnectionData) {
  const connectionData = (
    await axios.post(connectionConfigs.url + "connection-configs", data)
  ).data;
  // const responseObject: ApiResponse = {
  //   success: connectionData.success,
  //   msg: connectionData.msg,
  //   error: connectionData.error,
  //   connectionId: connectionData.connectionId,
  // };
  // return responseObject;
  console.log(connectionData);
  return connectionData;
}
