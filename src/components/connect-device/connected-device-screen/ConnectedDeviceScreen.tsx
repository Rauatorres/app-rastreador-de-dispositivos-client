import { useEffect, useState } from "react";
import connectionConfigsDisconnect from "../../../api/connection-configs/connection-configs.disconnect";
// import type ConnectionData from "../../../model/connectionData";
import connectionConfigsUpdate from "../../../api/connection-configs/connection-configs.update";
import getConnectedDevice from "../../../api/connection-configs/connection-configs.get-connected-device";
import { useCookies } from "react-cookie";
import TextInput from "../../../shared/ui/text-input/TextInput";
import Button from "../../../shared/ui/button/Button";

export default function ConnectedDeviceScreen() {
  // const [currentDeviceName, setCurrentDeviceName] = useState("");
  const [newDeviceName, setNewDeviceName] = useState("");
  const [cookie, setCookie] = useCookies(["connectionId"]);

  useEffect(() => {
    async function getCurrentDeviceName() {
      const res = await getConnectedDevice(cookie.connectionId);
      if (res) {
        // const responseResult = res.result as ConnectionData;
        // setCurrentDeviceName(responseResult.name);
        setNewDeviceName(res.name);
      }
      // else {
      //   console.log(res.error);
      // }
    }
    getCurrentDeviceName();
  }, [cookie.connectionId]);

  async function disconnectDeviceFromUrl() {
    const res = await connectionConfigsDisconnect(cookie.connectionId);
    if (res) {
      console.log(res.msg);
    }
    // else {
    //   console.log(res.error);
    // }
    setCookie("connectionId", false);
    // setCookie("connectedServerUrl", "");
  }

  async function updateDeviceName() {
    const res = await connectionConfigsUpdate(cookie.connectionId, {
      name: newDeviceName,
    });
    if (res) {
      console.log(res.msg);
      // const responseResult = res.result as ConnectionData;
      // setCurrentDeviceName(responseResult.name);
    }
    // else {
    //   console.log(res.error);
    // }
  }

  return (
    <div
      className={`
      flex flex-col gap-10
      `}
    >
      <div>
        <h2 className="text-xl">Dispositivo conectado</h2>
        {/* <button onClick={disconnectDeviceFromUrl}>Desconectar</button> */}
        <Button text="Desconectar" onclick={disconnectDeviceFromUrl} />
      </div>
      <div>
        {/* <h2>{currentDeviceName}</h2> */}
        <TextInput
          title="Nome do dispositivo"
          placeholder="renomear..."
          value={newDeviceName}
          onchange={(e) => setNewDeviceName(e.target.value)}
        />
        <Button text="Salvar" onclick={updateDeviceName} />
      </div>
    </div>
  );
}
