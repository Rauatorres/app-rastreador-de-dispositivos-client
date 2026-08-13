type ConnectedDeviceCardProps = {
  connectionId: string;
  name: string;
};

export default function ConnectedDeviceCard(props: ConnectedDeviceCardProps) {
  return (
    <div>
      <p>Nome: {props.name}</p>
    </div>
  );
}
