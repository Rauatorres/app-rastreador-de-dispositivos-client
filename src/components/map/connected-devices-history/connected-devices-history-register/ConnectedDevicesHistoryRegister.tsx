import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
  // type MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import { useState } from "react";

type ConnectedDevicesHistoryRegisterProps = {
  name: string;
  date: Date;
  deviceLocale: { lat: number; lng: number };
};

export default function ConnectedDevicesHistoryRegister({
  name,
  date,
  deviceLocale,
}: ConnectedDevicesHistoryRegisterProps) {
  const [mapDisplay, setMapDisplay] = useState("none");

  return (
    <div
      className={`
            bg-neutral-200
            my-5
            py-5 px-7
            max-w-150
        `}
    >
      <div
        className={`
            flex justify-between
        `}
      >
        <div>
          Nome <span>{name}</span>
        </div>
        <div>{date.toString()}</div>
      </div>
      <div>
        <div
          className="
            my-3
            cursor-pointer
            hover:text-blue-400
        "
          onClick={() => setMapDisplay(mapDisplay == "none" ? "block" : "none")}
        >
          {mapDisplay == "none" ? "mostrar" : "esconder"} localização
        </div>
        <div
          className="
            w-70 h-70
        "
          style={{ display: mapDisplay }}
        >
          <APIProvider
            apiKey="AIzaSyAVbkHnA-UrQhYf_DL7Yk8uvJWB5rfTj0g"
            // onLoad={() => console.log("Google Maps carregou!")}
            // onError={(error) => console.error("Erro Google Maps:", error)}
          >
            <Map
              // className="w-90 h-90"
              style={{ width: "100%", height: "100%" }}
              defaultCenter={{
                lat: deviceLocale.lat,
                lng: deviceLocale.lng,
              }}
              defaultZoom={15}
              gestureHandling="greedy"
              mapId="90dd261c43affd40955eb3a4"
              disableDefaultUI
            >
              <AdvancedMarker title={name} position={deviceLocale}>
                <Pin background={"#e42d2d"} />
              </AdvancedMarker>
            </Map>
          </APIProvider>
        </div>
      </div>
    </div>
  );
}
