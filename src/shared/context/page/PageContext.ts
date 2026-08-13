import { createContext } from "react";

const defaultValue = {
  currentPage: "dispositivo",
  changePageToMap: () => {},
  changePageToDevice: () => {},
};

const PageContext = createContext(defaultValue);

export default PageContext;
