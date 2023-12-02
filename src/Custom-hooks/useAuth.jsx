import {useState ,useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "../firebase.config";

const UseAuth =()=>{
    const [currentuser,setCurrentUser]=useState({})
    useEffect(()=>{
        onAuthStateChanged(Auth,(user)=>{
            if(user){
                setCurrentUser(user)
            }
            else{
                setCurrentUser(null)
            }
        })
    })

    return {
    currentuser,
    };
    
    
    
}

export default UseAuth;