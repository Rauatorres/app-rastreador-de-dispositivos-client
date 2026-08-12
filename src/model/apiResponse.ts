export default interface ApiResponse {
  success: boolean;
  msg?: string;
  error?: string;
  connectionId?: string;
}
