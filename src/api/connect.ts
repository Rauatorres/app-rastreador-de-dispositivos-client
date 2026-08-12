import axios from "axios";
import type ConnectionData from "../model/connectionData";
import type ApiResponse from "../model/apiResponse";

export default async function connect(url: string, data: ConnectionData) {
  const connectionData = (await axios.post(url + "connect_device", data)).data;
  const responseObject: ApiResponse = {
    success: connectionData.success,
    msg: connectionData.msg,
    error: connectionData.error,
    connectionId: connectionData.connectionId,
  };
  return responseObject;
}
