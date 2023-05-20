import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/img.svg";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {signIn, googleSignIn} = useContext(AuthContext)
    const [error, setError] = useState("");
    const Navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault(); // prevent page from reloading on submit
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);
       
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setError("");
            Navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message);
            event.target.reset();
        })  
    }
       // Google Login 
   const handleGoogleSignIn =() =>{
    googleSignIn()
    .then(result =>{
        const user =result.user;
        Navigate('/')
    })
    .catch(error =>{
        console.log(error.message)
    })
}

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-4xl text-center font-thin">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <p className="text-red-700" >{error}</p>
              <div className="form-control mt-6">
                <input
                  className="btn bg-sky-500 border-none"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="my-4 text-center text-sm">
              New to Toytopia{" "}
              <Link className="text-sky-700 underline font-normal" to="/signup">
                Sign Up
              </Link>{" "}
            </p>
            {/* google button */}
            <button
            onClick={handleGoogleSignIn}
              type="button"
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              <FaGoogle className="mr-2" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
