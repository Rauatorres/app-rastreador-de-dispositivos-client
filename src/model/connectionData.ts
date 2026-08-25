export default interface ConnectionData {
  id?: string;
  name: string;
  locale: {
    lat: number;
    lng: number;
  };
}
