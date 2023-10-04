import { useContext } from "react";
import { authcontext } from "../Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";


const Login = () => {

    const {signinuser}=useContext(authcontext)
    const location=useLocation()
    const navigate=useNavigate()

    const handlelogin=(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        e.target.reset()
        console.log(email,password)
        signinuser(email,password)
        .then(result=>{
          navigate(location?.state? location.state : '/')
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
       
          <button className="btn btn-primary">Login</button>
        </div>
        <p>do not have account?? please <Link to={'/resister'}>Resister</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;