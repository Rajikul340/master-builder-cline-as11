import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../AuthContext/AuthContex";
import { useContext } from "react";

const Header = () => {
  const { user, logOut } = useContext(UserContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/service">services</Link>
      </li>
      <li className="font-semibold">
        <Link to="/blog">Blogs</Link>
      </li>

      {user?.email ? (
        <>
          <li className="font-semibold">
            <Link to="/myreviews">my review</Link>
          </li>
          <li className="font-semibold">
            <Link to="/addservice">add service</Link>
          </li>
          <li className="font-semibold">
            <button onClick={handleLogOut} className="">
              signout
            </button>
          </li>

          {/* <li className='font-semibold'>{user?.displayName}</li> */}

          <li className="font-semibold rounded">
            {
              <img
                src={user?.photoURL ? user?.photoURL : ""}
                className="w-16 rounded"
                alt=""
              />
            }
          </li>
        </>
      ) : (
        <>
          <li className="font-semibold">
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar h-20 mb-12 pt-12 bg-base-100 shadow-lg">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost uppercase font-bold italic text-4xl"
        >
          <h1>master builder</h1>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        <hr />
      </div>
      {/* <div className="navbar-end">
               
            </div> */}
    </div>
  );
};

export default Header;
