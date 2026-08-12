import axios from "axios";
import type ConnectionData from "../model/connectionData";
import type ConnectionResponse from "../model/connectionResponse";

export default async function connect(url: string, data: ConnectionData) {
  const connectionData = (await axios.post(url + "connect_device", data)).data;
  const responseObject: ConnectionResponse = {
    success: connectionData.success,
    msg: connectionData.msg,
    error: connectionData.error,
  };
  return responseObject;
}
