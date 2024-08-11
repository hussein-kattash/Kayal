import { createContext, useState } from "react";

export const LevelsContext = createContext({
  levels: [],
  setLevels: () => {},
  selectedLevels: [],
  setSelectedLevels: () => {},
});

export const LevelsProvider = ({ children }) => {
  const [levels, setLevels] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);

  return (
    <LevelsContext.Provider value={{ setLevels, levels, selectedLevels, setSelectedLevels }}>
      {children}
    </LevelsContext.Provider>
  );
};
