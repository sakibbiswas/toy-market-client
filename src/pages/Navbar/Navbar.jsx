import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../provider/Authprovider';

const Navbar = () => {
    const { user, logOut } = useContext(Authcontext);
    const handelLogout = () => {
        logOut()
            .then(() => {



            })
            .catch(error => console.log(error))

    }
    const navLi = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='about'>About</Link></li>

        {user?.email ?
            <>
                <li><Link to='bookings'>My bookings</Link></li>
                <li> <button onClick={handelLogout}>Logout</button></li>
            </> :
            <li><Link to='login'>Login</Link></li>
        }

    </>

    return (


        <div className="navbar bg-orange-100 h-28 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {navLi}

                    </ul>

                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src='' alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navLi}


                </ul>
            </div >
            <div className="navbar-end">
                <button className="btn btn-outline btn-secondary">Apointment</button>
            </div>
        </div >

    )
};

export default Navbar;