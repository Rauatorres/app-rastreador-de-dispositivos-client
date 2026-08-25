export default interface ConnectionData {
  id?: string;
  name: string;
  deviceLocale: {
    id?: string;
    lat: number;
    lng: number;
  };
}
