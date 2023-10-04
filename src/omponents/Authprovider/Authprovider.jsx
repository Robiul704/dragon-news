import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase.config";

export const authcontext =createContext(null)

const Authprovider = ({children}) => {
    const [user,setuser]=useState()
    const [loading,setloading]=useState(true)

    const creatuser=(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signinuser=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout=()=>{
        setloading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
           
                setuser(currentuser)
                setloading(false)
            
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    

    const authinfo={user,creatuser,signinuser,logout,loading}

    return (
    <authcontext.Provider value={authinfo}>
        {children}
    </authcontext.Provider>
    )
};

export default Authprovider;