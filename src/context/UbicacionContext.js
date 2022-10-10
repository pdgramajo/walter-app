import { createContext, useState } from "react";

export const UbicacionContext = createContext({
  ubicaciones: [],
  setUbicaciones: () => {}
})

export const UbicacionProvider = ({ children }) => {
  const [ubicaciones, setUbicaciones] = useState([]);
  const value = { ubicaciones, setUbicaciones };

  return <UbicacionContext.Provider value={value}>{children}</UbicacionContext.Provider>;
}