import React, { useContext } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Sociallogin from '../sociallogin/Sociallogin';
import { Authcontext } from '../../provider/Authprovider';

const Login = () => {
    const { signIn } = useContext(Authcontext)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    // console.log(location);
    const navigate = useNavigate()
    const handellogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handellogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="login" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to toy marketplace <Link className='text-orange-500 font-bold' to='/register'>Register</Link></p>
                        <Sociallogin></Sociallogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;