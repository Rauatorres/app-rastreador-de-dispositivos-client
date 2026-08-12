type NavlinkProps = {
  title: string;
};

export default function Navlink(props: NavlinkProps) {
  return (
    <li>
      <a className="text-neutral-200 hover:text-white font-bold" href="#">
        {props.title}
      </a>
    </li>
  );
}
