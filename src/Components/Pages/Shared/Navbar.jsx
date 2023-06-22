import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Navbar = () => {
  const {logOut, user}=useContext(AuthContext)
  const handleLogOut=()=>{
    logOut()
  }
  const navList = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {user? <li>
      <Link to='/allToys'>All Toys</Link>
    </li>: ''
     }
      {user? <li>
      <Link to='/myToys'>My Toys</Link>
    </li>: ''}
    { user?<li>
        <Link to='/addToy'>Add A Toy</Link>
      </li>: ''}
      <li>
        <Link to='/blog'>Blogs</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#ffe9d055] px-10">
      <div className="navbar-start">
        <Link to="/" className=" normal-case text-xl text-center">
          <h2 className="font-bold">Toy Shop</h2>
          <img className="w-24" title="Toy Emporium" src={logo} alt="" />
        </Link>
        <div className="dropdown">
          <label tabIndex={0} className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow w-52"
          >
            {navList}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      <div className="navbar-end gap-3">
        <div className="avatar">
          <div className="w-10 mask mask-squircle">
            {
              user?<img title={user?.displayName } src={user?.picture} /> : ''
            }     
          </div>
        </div>
        {
            user? '' :<Link className="btn bg-orange-600 p-3 rounded-lg" to="/register">Sign Up</Link>
          }
          {
            user?<a className="btn bg-orange-600 p-3 rounded-lg" onClick={handleLogOut}>Log Out</a>:<Link className="btn bg-orange-600 p-3 rounded-lg" to="/login">Login</Link>
          }
        
      </div>
    </div>
  );
};

export default Navbar;
