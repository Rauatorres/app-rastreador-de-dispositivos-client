import { useContext } from "react";
import Navlink from "./navlink/Navlink";
import PageContext from "../../shared/context/page/PageContext";

export default function Header() {
  const { changePageToDevice, changePageToMap } = useContext(PageContext);

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
          <Navlink title="conectar dispositivo" onclick={changePageToDevice} />
          <Navlink title="ver mapa" onclick={changePageToMap} />
        </ul>
      </nav>
    </header>
  );
}
