import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const notify = (message) => toast(message);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        notify("successfully logged in");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        notify("Login failed. Please check your email and password.");
      });
  };

  const handleloginGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1 className="text-center my-12">This is login page</h1>
        <form onSubmit={handleLogin} className="lg:w-1/2 md:w-3/4 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn text-white btn-outline bg-[#03b97c]">
              Login
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Do not have account{" "}
          <Link className=" font-bold text-[#03b97c]" to="/register">
            Register
          </Link>
        </p>
      </div>
      <ToastContainer></ToastContainer>
      <p className="text-center mt-4">
        Login with Google Account {""}
        <Link onClick={handleloginGoogle} className=" font-bold text-[#03b97c]">
          Google
        </Link>
      </p>
    </div>
  );
};

export default Login;
