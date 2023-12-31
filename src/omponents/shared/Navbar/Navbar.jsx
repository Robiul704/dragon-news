import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authcontext } from "../../Authprovider/Authprovider";
import pic from "../../../assets/user.png"

const Navbar = () => {

    const { user,logout }=useContext(authcontext)

    const handlesignout=()=>{
        logout()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }






    const navlink=<>
    <NavLink to={'/'} className="mr-3">Home</NavLink>
    <NavLink to={'/about'} className="mr-3">About</NavLink>
    <NavLink to={'/career'} className="mr-3">Career</NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navlink}
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlink}
    </ul>
  </div>
  <div className="navbar-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={pic} />
        </div>
      </label>
    {
        
        user? <div className="flex justify-center items-center gap-10">
            <h1>{user.email}</h1>
            <button onClick={handlesignout}>sign out</button>
        </div>: <button><NavLink to={'/login'}>login</NavLink></button>
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;