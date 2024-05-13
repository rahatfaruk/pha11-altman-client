import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./comps/Footer";
import Navbar from "./comps/Navbar";
import useAuth from "./hooks/useAuth";

export const maxContent = 'max-w-screen-xl mx-auto'

function App() {
  const {user} = useAuth()
  console.log('currUser(App):', user);
  return (  
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      <ToastContainer position="top-center" theme="colored" />
    </>
  );
}

export default App;