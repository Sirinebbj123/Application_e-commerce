import React from "react"
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Shop from "../Pages/Shop";
import ProductDetails from "../Pages/ProductDetails";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Checkout from "../Pages/Checkout";
import { Routes,Route,Navigate} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AddProducts from "../admin/AddProducts";
import AllProducts from "../admin/AllProducts";
import Dashboard from "../admin/Dashboard";
import Users from "../admin/Users";
import Blog from "../pages/blog";
import Contact from "../pages/contact";


class Routers extends React.Component{
    render(){
        return(
            <>
            <Routes>
            <Route path='/' element={<Navigate to="/home"/>}/>

                <Route path='home' element={<Home/>}/>
                <Route path='Shop' element={<Shop/>}/>
                <Route path='shop/:id' element={<ProductDetails/>}/>
                <Route path='Cart' element={<Cart/>}/>
                <Route path='Blog' element={<Blog/>}/>
                <Route path='Contact' element={<Contact/>}/>

                <Route path="/*" element={<ProtectedRoute/>}>

                <Route  path="Checkout"  element={<Checkout/>}/>
                 <Route path="dashboard" element={
                    <Dashboard/>
                 }/>
                 <Route path="dashboard/all-products" element={<AllProducts/>}/>
                 <Route path="dashboard/add-products" element={<AddProducts/>}/>
                 <Route path="dashboard/users" element={<Users/>}/>

                 
                </Route>
                <Route path='Login' element={<Login/>}/>
                <Route path='Signup' element={<Signup/>}/>


                
            </Routes>

            </>
        );
    }
}

export default Routers;