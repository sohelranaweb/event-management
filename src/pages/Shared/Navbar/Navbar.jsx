import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#03b97c]  text-lg font-bold"
              : "text-lg font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#03b97c]  text-lg font-bold"
              : "text-lg font-bold"
          }
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#03b97c]  text-lg font-bold"
              : "text-lg font-bold"
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img className="lg:h-[48px] md:h-[40px] h-[25px]" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="mr-2">
          {user ? (
            <div className="flex justify-center items-center">
              <h1>{user.displayName}</h1>
              <img
                className="w-[40px] rounded-full ml-2"
                src={user.photoURL}
                alt=""
              />
            </div>
          ) : (
            ""
          )}{" "}
        </div>
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn text-white btn-outline bg-[#03b97c]"
          >
            Sign OUt
          </button>
        ) : (
          <Link to="/login">
            <button className="btn text-white btn-outline bg-[#03b97c]">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
