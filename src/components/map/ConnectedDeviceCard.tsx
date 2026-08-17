type ConnectedDeviceCardProps = {
  connectionId: string;
  name: string;
  locale: {
    latitude: string;
    longitude: string;
  };
};

export default function ConnectedDeviceCard(props: ConnectedDeviceCardProps) {
  return (
    <div>
      <p>Nome: {props.name}</p>
      <p>
        Localização:{" "}
        {`latitude: ${props.locale.latitude} longitude: ${props.locale.longitude}`}
      </p>
    </div>
  );
}
