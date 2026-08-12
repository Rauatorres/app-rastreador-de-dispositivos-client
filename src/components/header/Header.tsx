import Navlink from "./navlink/Navlink";

export default function Header() {
  return (
    <header
      className={`
        bg-cyan-500 text-white
        flex justify-between
    `}
    >
      <h1>Rastreador de dispositivos</h1>
      <nav>
        <ul className={`flex`}>
          <Navlink title="conectar dispositivo" />
          <Navlink title="logar como admin" />
        </ul>
      </nav>
    </header>
  );
}
