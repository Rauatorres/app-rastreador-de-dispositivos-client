export default interface ConnectionData {
  id?: string;
  name: string;
  deviceLocale: {
    lat: number;
    lng: number;
  };
}
