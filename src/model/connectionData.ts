export default interface ConnectionData {
  connectionId?: string;
  ipAddress: string;
  name: string;
  locale: {
    lat: number;
    lng: number;
  };
}
