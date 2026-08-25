import axios from "axios";
// import type ApiResponse from "../model/apiResponse";
import { connectionConfigs } from "./connection-configs";

export default async function disconnect(connectionId: string) {
  try {
    const deleteResponseData = (
      await axios.delete(
        connectionConfigs.url + "connection-configs/" + connectionId,
      )
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
