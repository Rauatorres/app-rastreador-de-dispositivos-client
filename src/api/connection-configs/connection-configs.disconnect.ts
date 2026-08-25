import axios from "axios";
// import type ApiResponse from "../model/apiResponse";
import { configs } from "../configs/configs";

export default async function connectionConfigsDisconnect(
  connectionId: string,
) {
  try {
    const deleteResponseData = (
      await axios.delete(configs.url + "connection-configs/" + connectionId)
    ).data;
    return deleteResponseData;
  } catch (error) {
    console.log(error);
  }
  // const responseObject: ApiResponse = {
  //   success: deleteResponseData.success,
  //   msg: deleteResponseData.msg,
  //   error: deleteResponseData.error,
  // };
}
