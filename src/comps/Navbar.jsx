import { NavLink, useNavigate } from "react-router-dom";
import { List, MoonStarsFill, SunFill } from "react-bootstrap-icons";
import { maxContent } from "../App";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false)
  const {isDarkTheme, onClickThemeToggler} = useContext(ThemeContext)
  const {user, logout} = useAuth() 
  const navigate = useNavigate()

  const navlinkClass = ({isActive}) => {
    return `px-2.5 py-1 rounded-md inline-block hover:underline hover:opacity-85 capitalize
    ${isActive ? 'bg-cyan-600 text-white' : ''}`
  }

  const handleLogout = async () => {
    try {
      await logout();
      toast.info('successfully logged out!')
      navigate('/login')
    } catch (error) {
      console.log('logout failed!', error.message);
      toast.error('logout failed! ' + error.message);
    }
  }

  return (  
    <nav className="px-4 border-b dark:border-gray-500 dark:bg-gray-800 dark:text-white shadow-md">
      <div className={`${maxContent} py-4 flex gap-6 justify-between flex-wrap items-center`}>
        {/* logo + sitename */}
        <h2 className="flex gap-2 text-xl font-semibold">
          <img src="/logo.svg" className="text-cyan-600" alt="logo" /> 
          <p>Alt<span className="text-cyan-600">Product</span></p>
        </h2>

        <button onClick={() => setShowLinks(!showLinks)} className="md:hidden border px-1 py-0.5 text-2xl rounded-md inline-block hover:opacity-85 capitalize"> <List/> </button>

        {/* nav-links */}
        <ul className={`md:flex flex-col flex-[100%] md:flex-initial md:flex-row gap-2 ${showLinks ? 'flex' : 'hidden'}`}>
          <li className="order-1 md:order-none px-1 mt-3 md:mt-0">
            <button onClick={() => onClickThemeToggler(isDarkTheme)} className="rounded-full p-1 text-2xl hover:scale-95 dark:text-white"> 
              {isDarkTheme ? <MoonStarsFill/> : <SunFill/> }
            </button>
          </li>
          <li>
            <NavLink to='/' className={navlinkClass}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/all-queries' className={navlinkClass}>Queries</NavLink>
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
                <button onClick={handleLogout} className="bg-red-800 text-white px-2.5 py-1 rounded-md inline-block hover:opacity-85 capitalize">Logout</button>
              </li>
              <li>
                <figure className="p-0.5 inline-block border border-cyan-600 rounded-full">
                  <img src={user.photoURL} className="size-7 rounded-full" alt={user.displayName} data-tooltip-id="userImg" data-tooltip-content={`${user.displayName} -- ${user.email}`} />
                  <Tooltip id="userImg" />
                </figure>
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