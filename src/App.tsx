import { useContext, useEffect } from "react";
import Header from "./components/header/Header";
import ConnectDevicePage from "./pages/ConnectDevicePage";
import PageContext from "./shared/context/page/PageContext";
import MapPage from "./pages/MapPage";
import { useCookies } from "react-cookie";
import deviceLocaleUpdate from "./api/device-locale/device-locale.update";
import getConnectedDevice from "./api/connection-configs/connection-configs.get-connected-device";

function App() {
  const { currentPage } = useContext(PageContext);
  const [cookie] = useCookies(["connectionId"]);

  useEffect(() => {
    if (cookie.connectionId) {
      setInterval(() => {
        navigator.geolocation.getCurrentPosition(async (location) => {
          // alert(
          //   `lat: ${location.coords.latitude} long: ${location.coords.longitude}`,
          // );
          const connectionConfigs = await getConnectedDevice(
            cookie.connectionId,
          );
          deviceLocaleUpdate(connectionConfigs!.deviceLocale.id!, {
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
