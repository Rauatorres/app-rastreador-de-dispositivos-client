import axios from "axios";
import { configs } from "../configs/configs";

export default async function getConnectedDevices() {
  return (await axios.get(configs.url + `connection-configs`)).data;
}
