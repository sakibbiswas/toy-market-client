import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../provider/Authprovider';
import Sociallogin from '../sociallogin/Sociallogin';
import useTitle from '../../components/Hooks/Usetitle';



const Register = () => {
    useTitle('Register')
    const { createuser, update } = useContext(Authcontext)
    const handelsignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;

        const email = form.email.value;
        const password = form.password.value;

        createuser(email, password)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser);
                loggeduser.displayName = name;
                loggeduser.photoURL = photo;
                update(name, photo)
                    .then(console.log('profile updated'))
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen ">


            <div className="card mt-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-teal-300">
                <div className="card-body ">
                    <h1 className="text-5xl font-bold">-Register-</h1>
                    <form onSubmit={handelsignup} >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name='photo' placeholder="Your photoUrl" className="input input-bordered" required />
                        </div>
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

                            <input className="btn btn-info" type="submit" value="Register" />
                        </div>
                    </form>
                    <p className='my-4 text-center'>Already have an account please <Link className='text-orange-500 font-bold' to='/login'>login</Link></p>
                    <Sociallogin></Sociallogin>
                </div>
            </div>
        </div>

    );
};

export default Register;