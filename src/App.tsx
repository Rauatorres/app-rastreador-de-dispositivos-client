import { useContext, useEffect } from "react";
import Header from "./components/header/Header";
import ConnectDevicePage from "./pages/ConnectDevicePage";
import PageContext from "./shared/context/page/PageContext";
import MapPage from "./pages/MapPage";
import { useCookies } from "react-cookie";
import deviceLocaleUpdate from "./api/device-locale/device-locale.update";

function App() {
  const { currentPage } = useContext(PageContext);
  const [cookie] = useCookies(["connectionId"]);

  useEffect(() => {
    if (cookie.connectionId) {
      setInterval(() => {
        navigator.geolocation.getCurrentPosition((location) => {
          // alert(
          //   `lat: ${location.coords.latitude} long: ${location.coords.longitude}`,
          // );
          deviceLocaleUpdate(cookie.connectionId, {
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          });
        });
      }, 1000);
    }
  }, [cookie.connectionId]);

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
