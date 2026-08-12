type NavlinkProps = {
  title: string;
};

export default function Navlink(props: NavlinkProps) {
  return (
    <li>
      <a href="#">{props.title}</a>
    </li>
  );
}
