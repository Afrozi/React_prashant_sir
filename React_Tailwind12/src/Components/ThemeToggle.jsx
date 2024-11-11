import React, {useContext} from 'react'
import ThemeContext from '../Store/ThemeContext'

const ThemeToggle = () => {
 
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <button className="m-3 border-gray-950 p-2 text-xl rounded bg-slate-400" onClick={toggleTheme}>Change Theme</button>
  )
}

export default ThemeToggle
