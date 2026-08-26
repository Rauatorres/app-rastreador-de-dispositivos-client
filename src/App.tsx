import { useContext } from "react";
import Header from "./components/header/Header";
import ConnectDevicePage from "./pages/ConnectDevicePage";
import PageContext from "./shared/context/page/PageContext";
import MapPage from "./pages/MapPage";
// import { useCookies } from "react-cookie";

function App() {
  const { currentPage } = useContext(PageContext);
  // const [cookie] = useCookies(["connectionId"]);

  function showPage() {
    switch (currentPage) {
      case "dispositivo":
        return <ConnectDevicePage />;
      case "mapa":
        return <MapPage />;
      default:
        return <ConnectDevicePage />;
    }
  }

  return (
    <>
      <Header />
      {showPage()}
    </>
  );
}

export default App;
