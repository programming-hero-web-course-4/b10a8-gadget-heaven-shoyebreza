import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
   
    return (
        <div>
             <Toaster/>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};
export default Root;