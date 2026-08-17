type ConnectedDeviceCardProps = {
  connectionId: string;
  name: string;
  locale: string;
};

export default function ConnectedDeviceCard(props: ConnectedDeviceCardProps) {
  return (
    <div>
      <p>Nome: {props.name}</p>
      <p>Localização: {props.locale}</p>
    </div>
  );
}
