type ConnectedDeviceCardProps = {
  connectionId: string;
  name: string;
  locale: {
    lat: number;
    lng: number;
  };
};

export default function ConnectedDeviceCard(props: ConnectedDeviceCardProps) {
  return (
    <div>
      <p>Nome: {props.name}</p>
      {/* <p>
        Localização:{" "}
        {`latitude: ${props.locale.lat} longitude: ${props.locale.lng}`}
      </p> */}
    </div>
  );
}
