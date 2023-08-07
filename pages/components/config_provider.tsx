// LanguageContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

 
const ConfigContext = createContext({});

const ConfigProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(true);
  let isRecover = false
  let isRecoverTheme = false
  const LIGHT_MODE_TEXT = "lightMode"

  useEffect(() => { 
    if(darkMode){
      document.body.classList.add(LIGHT_MODE_TEXT)
      document.querySelector(".section-person").classList.add(LIGHT_MODE_TEXT)
      document.querySelector(".section-contain").classList.add(LIGHT_MODE_TEXT)
      document.querySelector(".section-tech").classList.add(LIGHT_MODE_TEXT)
      document.querySelector(".footer").classList.add(LIGHT_MODE_TEXT)
    } else {
      document.body.classList.remove(LIGHT_MODE_TEXT)
      document.querySelector(".section-person").classList.remove(LIGHT_MODE_TEXT)
      document.querySelector(".section-contain").classList.remove(LIGHT_MODE_TEXT)
      document.querySelector(".section-tech").classList.remove(LIGHT_MODE_TEXT)
      document.querySelector(".footer").classList.remove(LIGHT_MODE_TEXT)
    }
   
  },[darkMode])

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
    if(localStorage != null && localStorage.getItem('theme') == null){
      let localTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false
      localStorage.setItem('theme',localTheme.toString())
      setDarkMode(localTheme)

    } else if(localStorage != null) {
      let safeTheme = JSON.parse(localStorage.getItem('theme'))
      isRecoverTheme = true
      setDarkMode(safeTheme)
    }
  }, [])

  useEffect(() => {
    if(!isRecover){
      localStorage.setItem('language',language)
    }

    isRecover = false
  },[language])

  useEffect(() => {
    if(!isRecoverTheme){
      localStorage.setItem('theme', darkMode.toString())
    }
    isRecover = false
  },[darkMode])

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

export default ConfigProvider

export function useConfigContext() {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
