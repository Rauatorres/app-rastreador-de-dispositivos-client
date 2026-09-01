import { useEffect, useRef, useState } from "react";
import type { DeviceLocaleRegister } from "../../../model/deviceLocaleRegister";
import getAllDeviceLocaleHistory from "../../../api/device-locale-history/device-locale-history.getAll";
import ConnectedDevicesHistoryRegister from "./connected-devices-history-register/ConnectedDevicesHistoryRegister";
import Button from "../../../shared/ui/button/Button";

export default function ConnectedDevicesHistory() {
  const [devicesLocaleHistory, setDevicesLocaleHistory] = useState<
    DeviceLocaleRegister[]
  >([]);
  const [selectedRegisters, setSelectedRegisters] =
    useState<DeviceLocaleRegister[]>(devicesLocaleHistory);
  const searchByNameInputRef = useRef<HTMLInputElement>(null);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    async function settingDevicesLocaleHistory() {
      const getDevicesLocaleHistory = await getAllDeviceLocaleHistory();
      setDevicesLocaleHistory(getDevicesLocaleHistory);
    }
    settingDevicesLocaleHistory();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedRegisters(devicesLocaleHistory);
  }, [devicesLocaleHistory]);

  function showHistory() {
    return selectedRegisters.map((deviceLocaleRegister) => {
      const { date, connectionConfigs } = deviceLocaleRegister;
      const { deviceLocale, name } = connectionConfigs;

      return (
        <ConnectedDevicesHistoryRegister
          name={name}
          date={date}
          deviceLocale={deviceLocale}
        />
      );
    });
  }

  function changeSelectedRegistersByDate(dateString: string) {
    setSelectedDate(dateString);
    if (dateString) {
      const date = new Date(dateString + "T00:00");
      setSelectedRegisters(
        devicesLocaleHistory.filter((register) => {
          const registerDate = new Date(register.date);
          return (
            registerDate.getDate() == date.getDate() &&
            registerDate.getMonth() == date.getMonth()
          );
        }),
      );
    } else {
      setSelectedRegisters(devicesLocaleHistory);
    }
  }

  function filterSelectedRegistersByName(name: string) {
    if (selectedRegisters.length == 0) {
      if (selectedDate) {
        changeSelectedRegistersByDate(selectedDate);
      } else {
        setSelectedRegisters(devicesLocaleHistory);
      }
    }
    if (name) {
      setSelectedRegisters((prev) =>
        prev.filter((register) => {
          return register.connectionConfigs.name == name;
        }),
      );
    }
  }

  return (
    <section>
      <h1>Histórico</h1>
      <div>
        <h2>Selecionar data</h2>
        <input
          type="date"
          onChange={(e) => changeSelectedRegistersByDate(e.target.value)}
          // value={selectedDate}
        />
        <input type="text" ref={searchByNameInputRef} />
        <Button
          text="selecionar"
          onclick={() =>
            filterSelectedRegistersByName(searchByNameInputRef.current!.value)
          }
        />
        <Button
          text="Mostrar todos"
          onclick={() => {
            setSelectedRegisters(devicesLocaleHistory);
            setSelectedDate("");
          }}
        />
      </div>
      <div>{showHistory()}</div>
    </section>
  );
}
