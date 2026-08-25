import type ConnectionData from "./connectionData";

export default interface ApiResponse {
  success?: boolean;
  msg?: string;
  error?: string;
  connectionId?: string;
  result?: ConnectionData | ConnectionData[];
}
