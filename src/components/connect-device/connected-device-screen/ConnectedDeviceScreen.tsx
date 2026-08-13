import { useContext, useEffect, useState } from "react";
import ConnectContext from "../../../shared/context/connect/ConnectContext";
import disconnect from "../../../api/disconnect";
import type ConnectionData from "../../../model/connectionData";
import update from "../../../api/update";
import getConnectedDevice from "../../../api/get-connected-device";

export default function ConnectedDeviceScreen() {
  const { disconnectDevice, connectedUrl, connectedDeviceId } =
    useContext(ConnectContext);

  const [currentDeviceName, setCurrentDeviceName] = useState("");
  const [newDeviceName, setNewDeviceName] = useState("");

  useEffect(() => {
    async function getCurrentDeviceName() {
      // setTimeout(async () => {
      const res = await getConnectedDevice(connectedUrl, connectedDeviceId);
      if (res.success) {
        const responseResult = res.result as ConnectionData;
        setCurrentDeviceName(responseResult.name);
        setNewDeviceName(responseResult.name);
      } else {
        console.log(res.error);
      }
    }
    getCurrentDeviceName();
  }, [connectedUrl, connectedDeviceId]);

  async function disconnectDeviceFromUrl() {
    const res = await disconnect(connectedUrl, connectedDeviceId);
    if (res.success) {
      console.log(res.msg);
      disconnectDevice();
    } else {
      console.log(res.error);
      console.log(connectedDeviceId);
    }
  }

  async function updateDeviceName() {
    const res = await update(connectedUrl, connectedDeviceId, {
      name: newDeviceName,
    });
    if (res.success) {
      console.log(res.msg);
      const responseResult = res.result as ConnectionData;
      setCurrentDeviceName(responseResult.name);
    } else {
      console.log(res.error);
    }
  }

  return (
    <div>
      <div>
        <h2>Dispositivo conectado</h2>
        <button onClick={disconnectDeviceFromUrl}>Desconectar</button>
      </div>
      <div>
        <h2>{currentDeviceName}</h2>
        <input
          className={`
            bg-neutral-400
            block
            text-3xl
            px-7 py-5
            w-150
            `}
          type="text"
          placeholder="renomear..."
          value={newDeviceName}
          onChange={(e) => setNewDeviceName(e.target.value)}
        />
        <button
          className={`
            bg-cyan-600 text-white
            px-5 py-1
            cursor-pointer
            block
            text-2xl
            `}
          onClick={updateDeviceName}
        >
          Salvar
        </button>
      </div>
    </div>
  );
}
