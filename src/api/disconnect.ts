import axios from "axios";
import type ApiResponse from "../model/apiResponse";

export default async function disconnect(url: string, connectionId: string) {
  const deleteResponseData = (
    await axios.delete(url + "remove_device/" + connectionId)
  ).data;
  const responseObject: ApiResponse = {
    success: deleteResponseData.success,
    msg: deleteResponseData.msg,
    error: deleteResponseData.error,
  };
  return responseObject;
}
