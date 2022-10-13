import { createContext, useState } from "react";

export const UbicationContext = createContext({
  ubications: [],
  setUbications: () => {}
})

export const UbicationProvider = ({ children }) => {
  const [ubications, setUbications] = useState([]);
  const value = { ubications, setUbications };

  return <UbicationContext.Provider value={value}>{children}</UbicationContext.Provider>;
}