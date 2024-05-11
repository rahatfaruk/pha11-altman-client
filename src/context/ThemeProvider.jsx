import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

function ThemeProvider({children}) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  // onclick theme toggler: toggle theme && update LS
  const handleClickThemeToggler = currIsDarkMode => {
    // currently on darkMode => change to light
    if(currIsDarkMode) {
      setIsDarkTheme(false)
      document.documentElement.classList.remove('dark')
      localStorage.setItem('altproduct:theme', 'light')
    } 
    // currently on lightMode => change to dark
    else {
      setIsDarkTheme(true)
      document.documentElement.classList.add('dark')
      localStorage.setItem('altproduct:theme', 'dark')
    }
  }

  // on page load : set theme based on LS; if not saved before, set theme by device-theme
  useEffect(() => {
    const lsTheme = localStorage.getItem('altproduct:theme')
    const mmIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    // stored dark => set to dark mode
    if (lsTheme === 'dark') {
      setIsDarkTheme(true)
      document.documentElement.classList.add('dark')
    } 
    // lsTheme is not set && device theme == dark ==> set to dark mode
    else if (!lsTheme && mmIsDark) {
      setIsDarkTheme(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <ThemeContext.Provider value={
      {isDarkTheme, setIsDarkTheme, onClickThemeToggler:handleClickThemeToggler}
    }>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;