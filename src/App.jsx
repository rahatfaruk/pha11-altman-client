import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./comps/Footer";
import Navbar from "./comps/Navbar";

export const maxContent = 'max-w-screen-xl mx-auto'

function App() {
  return (  
    <>
      <div className="flex flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      <ToastContainer position="top-center" theme="colored" />
    </>
  );
}

export default App;