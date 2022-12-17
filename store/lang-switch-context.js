import React, { useContext, useReducer, useState } from "react";
// import reducer from "./lang-switch-reducer";
import { useRouter } from "next/router";

const LangContext = React.createContext();

export const LangProvider = ({ children }) => {
  const { locale } = useRouter();
  const [currentLocale, setToggleLocale] = useState(locale);
  //   const currentLocale = "en";
  console.log(currentLocale);
  console.log(useRouter());
  //   const [state, dispatch] = useReducer(reducer, { locale: localeToggle });

  //   const toggleLocale = () => {
  //     dispatch({ type: "TOGGLE_LANGUAGE" });
  //   };
  console.log(currentLocale);
  return (
    <LangContext.Provider value={{ currentLocale, setToggleLocale }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLangContext = () => {
  return useContext(LangContext);
};
