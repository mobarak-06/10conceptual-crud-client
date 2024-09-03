import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const {users, userSignOut} = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={({isActive}) => isActive && 'text-pink-500 underline font-bold' }>Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct" className={({isActive}) => isActive && 'text-pink-500 underline font-bold' }>Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/myCart" className={({isActive}) => isActive && 'text-pink-500 underline font-bold' }>My Cart</NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    userSignOut()
    .then(() => {
      console.log('sign out successfully');
    })
    .catch(error => {
      console.error(error);
      
    })
  }

  return (
    <div>
      <div className="navbar bg-base-100 fixed top-0 z-10 shadow-md md:px-16">
        <div className="navbar-start">
          <Link to="/" className=" font-semibold text-xl text-pink-500 ">MegaGadgets</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        {/* profile side */}
        <div className="navbar-end">
          {
            users ? <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleSignOut}>Logout</a>
              </li>
            </ul>
          </div> : 
          <Link to="/signIn" className="text-xl font-semibold btn">Sign In</Link>
          }
          
          {/*  */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <img className="w-6" src="https://i.ibb.co/YhBHY70/menu.png" alt="" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
