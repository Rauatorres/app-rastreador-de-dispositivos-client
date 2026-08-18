export default interface ConnectionData {
  connectionId?: string;
  name: string;
  locale: {
    lat: number;
    lng: number;
  };
}
