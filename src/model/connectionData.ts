export default interface ConnectionData {
  connectionId?: string;
  ipAddress: string;
  name: string;
  locale: {
    latitude: string;
    longitude: string;
  };
}
