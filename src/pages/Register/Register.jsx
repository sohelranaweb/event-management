import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const notify = (message) => toast(message);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    // Password validation checks
    const minLength = 6;
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password);

    if (password.length < minLength) {
      notify("Password must be at least 6 characters long.");
    } else if (!hasCapitalLetter) {
      notify("Password must contain at least one capital letter.");
    } else if (hasSpecialCharacter) {
      notify("Password cannot contain special characters.");
    } else {
      setRegisterError("");
      createUser(email, password)
        .then((result) => {
          const userLogged = result.user;
          console.log("email and password logged", userLogged);
          notify("Registration Successfully!");
        })
        .catch((error) => {
          console.log(error);
          setRegisterError(error.message);
          notify("Registration Failed!");
        });
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1 className="text-center my-12">This is Register page</h1>

        {registerError && (
          <p className="text-red-600 text-lg font-medium text-center">
            {registerError}
          </p>
        )}

        <form onSubmit={handleRegister} className="lg:w-1/2 md:w-3/4 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Phot URL"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
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
              Register
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have account? {""}
          <Link className=" font-bold text-[#03b97c] " to="/login">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
