// LanguageContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

 
  const ConfigContext = createContext({});

export function ConfigProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(true);
  let isRecover = false

  useEffect(() => {
    if(localStorage != null && localStorage.getItem('language') == null){
      let localLanguage = navigator.language.includes('es') ? "es" : "en"
      localStorage.setItem('language',localLanguage)
      setLanguage(localLanguage)
      console.log("set Language : ", localLanguage)
    } else if(localStorage != null) {
      let safeLanguage = localStorage.getItem('language')
      isRecover = true
      setLanguage(safeLanguage)
      console.log("recover language", safeLanguage)
    }
  }, [])

  useEffect(() => {
    if(!isRecover){
      localStorage.setItem('language',language)
    }

    isRecover = false
  },[language])

  const contextValue = {
    language,
    setLanguage,
    darkMode,
    setDarkMode,
  };
  

  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfigContext() {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
