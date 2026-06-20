import { createContext } from "react";

export const NewContext = createContext();

export function AppDataProvider({ children }) {
  const data = {
    isLogin: false,
    browser: "chrome",
  };

  return (
    <NewContext.Provider value={data}>
      {children}
    </NewContext.Provider>
  );
}