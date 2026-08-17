import { useEffect, useState } from "react";
import connect from "../../../api/connect";
import type ConnectionData from "../../../model/connectionData";
import { useCookies } from "react-cookie";

export default function ConnectDeviceForm() {
  const [serverUrl, setServerUrl] = useState("");
  const [dataNameInput, setDataNameInput] = useState("");
  const [data, setData] = useState<ConnectionData>({
    ipAddress: "",
    name: "",
    locale: "",
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_cookie, setCookie] = useCookies([
    "connectionId",
    "connectedServerUrl",
  ]);

  useEffect(() => {
    console.log(data);
    async function connectDevice() {
      const connection = await connect(serverUrl, data);
      if (connection.success) {
        setCookie("connectionId", connection.connectionId);
        setCookie("connectedServerUrl", serverUrl);
        console.log(connection.msg);
      } else {
        console.log(connection.error);
      }
    }
    if (data.name) {
      connectDevice();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(async (location) => {
      const { latitude, longitude } = location.coords;
      const newData = {
        ...data,
        name: dataNameInput,
        locale: `lat: ${latitude} long: ${longitude}`,
      };
      setData(newData);
    });
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col gap-5 w-fit mx-auto my-50"
    >
      <input
        className={`
            bg-neutral-400
            block
            text-3xl
            px-7 py-5
            w-150
            `}
        type="text"
        onChange={(e) => setServerUrl(e.target.value)}
      />
      <input
        className={`
            bg-neutral-400
            block
            text-3xl
            px-7 py-5
            w-150
            `}
        type="text"
        onChange={(e) => setDataNameInput(e.target.value)}
      />
      <button
        className={`
            bg-cyan-600 text-white
            px-5 py-1
            cursor-pointer
            block
            text-2xl
            `}
        type="submit"
      >
        Conectar
      </button>
    </form>
  );
}
