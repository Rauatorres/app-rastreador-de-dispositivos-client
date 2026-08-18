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
    </div>
  );
}
