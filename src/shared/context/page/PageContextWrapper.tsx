import { useState, type ReactNode } from "react";
import PageContext from "./PageContext";

export default function PageContextWrapper(props: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState("dispositivo");

  function changePageToMap() {
    setCurrentPage("mapa");
  }

  function changePageToDevice() {
    setCurrentPage("dispositivo");
  }

  return (
    <PageContext.Provider
      value={{ currentPage, changePageToMap, changePageToDevice }}
    >
      {props.children}
    </PageContext.Provider>
  );
}
