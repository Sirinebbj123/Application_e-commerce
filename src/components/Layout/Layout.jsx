import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import {useLocation} from "react-router-dom";
import AdminNav from "../../admin/AdminNav";
const Layout =()=>{
    const location = useLocation();
    
        return(
            <>
             
             {
                
                location.pathname.startsWith('/Dashboard') ? <AdminNav/> : 
                <Header/>
             }

            <div>
            <Routers/>
            </div>
            <Footer/>
            </>
        );
    
}

export default Layout;