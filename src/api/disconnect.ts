import axios from "axios";
import type ApiResponse from "../model/apiResponse";
import { connectionConfigs } from "./connection-configs";

export default async function disconnect(connectionId: string) {
  const deleteResponseData = (
    await axios.delete(connectionConfigs.url + "remove_device/" + connectionId)
  ).data;
  const responseObject: ApiResponse = {
    success: deleteResponseData.success,
    msg: deleteResponseData.msg,
    error: deleteResponseData.error,
  };
  return responseObject;
}
