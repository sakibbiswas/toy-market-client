import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../provider/Authprovider';
import logo from '../../../assets/attachment_96680655.png'

const Navbar = () => {
    const { user, logOut } = useContext(Authcontext);
    const handelLogout = () => {
        logOut()
            .then(() => {



            })
            .catch(error => console.log(error))

    }
    const navLi = <>

        <li className='font-bold text-slate-900 hover:text-orange-500 hover: transform 
         hover:scale-75 duration-300'><Link to='/'>Home</Link></li>
        <li className='font-bold text-slate-900 hover:text-orange-500 hover: transform 
         hover:scale-75 duration-300'><Link to='/blogs'>Blogs</Link></li>
        <li className='font-bold text-slate-900 hover:text-orange-500 hover: transform 
         hover:scale-75 duration-300'><Link to='/error'>Error</Link></li>
        <li className='font-bold text-slate-900 hover:text-orange-500 hover: transform 
         hover:scale-75 duration-300'><Link to='/alltoys'>All toys</Link></li>


        {user?.email ?
            <>
                <div className="mr-3">
                    <li className='font-bold text-slate-900 hover:text-orange-500 hover: transform 
         hover:scale-75 duration-300'><Link to='/addtoy'>Add a Toy</Link></li>
                </div>

                <div className="mr-3">
                    <li className='font-bold text-slate-900 hover:text-orange-500 hover: transform 
         hover:scale-75 duration-300'><Link to='mytoys'>My Toys</Link></li>
                </div>

                <div className="avatar gap-3">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img title={user.displayName} src={user.photoURL} />
                    </div>
                </div>

                <div className="ml-3">
                    <li className='font-bold text-slate-900 hover:text-orange-500 hover: transform 
         hover:scale-75 duration-300'> <button onClick={handelLogout}>Logout</button></li>
                </div>

            </> :
            <li className='font-bold text-slate-900 hover:text-orange-500 hover: transform 
         hover:scale-75 duration-300'><Link to='login'>Login</Link></li>
        }

    </>

    return (


        <div className="navbar bg-sky-200 h-28 mb-5" data-aos="fade-up"
            data-aos-duration="3000">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {navLi}

                    </ul>

                </div>
                <div className="mr-5">
                    <Link to='/' className=" items-center" >
                        <h4 className='text-2xl font-bold text-sky-700 pl-3' data-aos="zoom-in-down" data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">Toy-Shop</h4>
                    </Link>
                </div>
                <Link to='/' className=" items-center">
                    <img src={logo} alt="" />
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navLi}


                </ul>
            </div >

        </div >

    )
};

export default Navbar;