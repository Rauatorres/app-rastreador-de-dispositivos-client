import { useEffect, useState } from "react";
import connect from "../../../api/connect";
import type ConnectionData from "../../../model/connectionData";
import { useCookies } from "react-cookie";
import TextInput from "../../../shared/ui/text-input/TextInput";
import Button from "../../../shared/ui/button/Button";
// import ErrorMessage from "../../error-message/ErrorMessage";

export default function ConnectDeviceForm() {
  // const [error, setError] = useState(false);
  // const [errorMsg, setErrorMsg] = useState("");
  // const [serverUrl, setServerUrl] = useState("");
  const [dataNameInput, setDataNameInput] = useState("");
  const [data, setData] = useState<ConnectionData>({
    name: "",
    deviceLocale: {
      lat: 0,
      lng: 0,
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_cookie, setCookie] = useCookies([
    "connectionId",
    // "connectedServerUrl",
  ]);

  useEffect(() => {
    // console.log(data);
    async function connectDevice() {
      try {
        const connection = await connect(data);
        if (connection.success) {
          setCookie("connectionId", connection.connectionId);
          // setCookie("connectedServerUrl", serverUrl);
          console.log(connection.msg);
        } else {
          console.log(connection.error);
          // setError(true);
          // setErrorMsg(connection.error!);
        }
      } catch (err) {
        if (err instanceof Error) {
          // setError(true);
          // setErrorMsg(err.message);
        }
        console.log(err);
      }
    }
    if (data.name) {
      connectDevice();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(
      async (location) => {
        const { latitude, longitude } = location.coords;
        const newData = {
          ...data,
          name: dataNameInput,
          locale: {
            lat: latitude,
            lng: longitude,
          },
        };
        setData(newData);
      },
      (error) => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  }

  return (
    <>
      {/* {error ? <ErrorMessage msg={errorMsg} /> : <></>} */}
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-5 w-fit mx-auto my-50"
      >
        {/* <input
          className={`
            bg-neutral-400
            block
            text-3xl
            px-7 py-5
            w-150
            `}
          type="text"
          onChange={(e) => setServerUrl(e.target.value)}
        /> */}
        {/* <input
          className={`
            bg-neutral-400
            block
            text-3xl
            px-7 py-5
            w-150
            `}
          type="text"
          onChange={(e) => setDataNameInput(e.target.value)}
        /> */}
        <TextInput
          title="Nome do dispositivo"
          onchange={(e) => setDataNameInput(e.target.value)}
        />
        {/* <button
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
        </button> */}
        <Button text="Conectar" type="submit" />
      </form>
    </>
  );
}
