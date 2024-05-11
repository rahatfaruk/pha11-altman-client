import { NavLink } from "react-router-dom";
import { List, MoonStarsFill, SunFill } from "react-bootstrap-icons";
import { maxContent } from "../App";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const fakeUser = 'a' && {email: 'ali@mail.com', displayName: 'ali'}

function Navbar() {
  const [showLinks, setShowLinks] = useState(false)
  const {isDarkTheme, onClickThemeToggler} = useContext(ThemeContext)
  const user = fakeUser 

  const navlinkClass = ({isActive}) => {
    return `px-2.5 py-1 rounded-md inline-block hover:underline hover:opacity-85 capitalize
    ${isActive ? 'bg-cyan-600 text-white' : ''}`
  }

  return (  
    <nav className="px-4 mb-6 dark:bg-gray-800 dark:text-white">
      <div className={`${maxContent} py-4 border-b flex gap-6 justify-between flex-wrap items-center`}>
        {/* logo + sitename */}
        <h2 className="flex gap-2 text-xl font-semibold">
          <img src="/logo.svg" className="text-cyan-600" alt="logo" /> 
          <p>Alt<span className="text-cyan-600">Product</span></p>
        </h2>

        <button onClick={() => setShowLinks(!showLinks)} className="md:hidden border px-1 py-0.5 text-2xl rounded-md inline-block hover:opacity-85 capitalize"> <List/> </button>

        {/* nav-links */}
        <ul className={`md:flex flex-col flex-[100%] md:flex-initial md:flex-row gap-2 ${showLinks ? 'flex' : 'hidden'}`}>
          <li className="order-1 md:order-none px-1">
            <button onClick={() => onClickThemeToggler(isDarkTheme)} className="border rounded-full p-1 text-2xl hover:scale-95 dark:text-white"> 
              {isDarkTheme ? <MoonStarsFill/> : <SunFill/> }
            </button>
          </li>
          <li>
            <NavLink to='/' className={navlinkClass}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/queries' className={navlinkClass}>Queries</NavLink>
          </li>
          {user ? 
            <>
              <li>
                <NavLink to='/my-queries' className={navlinkClass}>My queries</NavLink>
              </li>
              <li>
                <NavLink to='/recommendations-for-me' className={navlinkClass}>Recommendations For Me</NavLink>
              </li>
              <li>
                <NavLink to='/my-recommendations' className={navlinkClass}>My Recommendations</NavLink>
              </li>
              <li>
                <button className="bg-red-800 text-white px-2.5 py-1 rounded-md inline-block hover:opacity-85 capitalize">Logout</button>
              </li>
            </> :
            <>
              <li>
                <NavLink to='/login' className={navlinkClass}>login</NavLink>
              </li>
            </>
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;