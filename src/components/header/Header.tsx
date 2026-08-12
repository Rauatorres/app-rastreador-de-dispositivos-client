import Navlink from "./navlink/Navlink";

export default function Header() {
  return (
    <header
      className={`
        bg-cyan-500 text-white
        flex justify-between items-center
        px-8
        py-6
    `}
    >
      <h1 className="text-2xl cursor-default">Rastreador de dispositivos</h1>
      <nav>
        <ul
          className={`
        flex gap-6
        text-lg
            `}
        >
          <Navlink title="conectar dispositivo" />
          <Navlink title="logar como admin" />
        </ul>
      </nav>
    </header>
  );
}
