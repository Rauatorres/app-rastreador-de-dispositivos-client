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
    <div
      className={`
      border border-neutral-400
      w-50
      text-neutral-600 text-xl
      my-3
      p-4
      break-all
      flex items-center
    `}
    >
      <p>{props.name}</p>
    </div>
  );
}
