import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
    const {user} = useContext(AuthContext)
   console.log(user?.displayName)
    const menuItems = <>
     <li><a>Media</a></li>
        <li><a>Message</a></li>
     
        <li><a>About</a></li>
        <div className="avatar online ml-4 ">
  <div className="w-10 h-10 rounded-full">
    <img src={user?.photoURL} />
  </div>
</div>
    </>
    return (

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menuItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="avatar online ml-4 lg:hidden">
  <div className="w-10 h-10 rounded-full">
    <img src={user?.photoURL} />
  </div>
</div>
   {user?.uid ? <> <Link to="/login" className="btn"><span className='text-red-500'>Logout</span></Link></> :<>
   <Link to="/login" className="btn "><span >Login</span></Link>
   </>}
  </div>
</div>
    );
};

export default Navbar;