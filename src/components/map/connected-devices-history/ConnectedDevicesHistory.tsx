import { useEffect, useState } from "react";
import type { DeviceLocaleRegister } from "../../../model/deviceLocaleRegister";
import getAllDeviceLocaleHistory from "../../../api/device-locale-history/device-locale-history.getAll";
import ConnectedDevicesHistoryRegister from "./connected-devices-history-register/ConnectedDevicesHistoryRegister";

export default function ConnectedDevicesHistory() {
  const [devicesLocaleHistory, setDevicesLocaleHistory] = useState<
    DeviceLocaleRegister[]
  >([]);

  useEffect(() => {
    async function settingDevicesLocaleHistory() {
      const getDevicesLocaleHistory = await getAllDeviceLocaleHistory();
      setDevicesLocaleHistory(getDevicesLocaleHistory);
    }
    settingDevicesLocaleHistory();
  }, []);

  function showHistory() {
    return devicesLocaleHistory.map((deviceLocaleRegister) => {
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

  return (
    <section>
      <h1>Histórico</h1>
      <div>{showHistory()}</div>
    </section>
  );
}
