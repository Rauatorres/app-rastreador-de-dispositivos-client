type NavlinkProps = {
  title: string;
  onclick: () => void;
};

export default function Navlink(props: NavlinkProps) {
  return (
    <li>
      <a
        className="text-neutral-200 hover:text-white font-bold"
        href="#"
        onClick={props.onclick}
      >
        {props.title}
      </a>
    </li>
  );
}
