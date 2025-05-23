import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import {  signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/firebase';

const SignIn = () => {
    // const {provider} = use(AuthContext)

    const navigate = useNavigate();
    const { signinUser, provider } = use(AuthContext);
    // console.log(createUser)

    // Sign in with popup
    const handleGoogleSignIn = () => {
          signInWithPopup(auth,provider )
          .then(result => {
            console.log(result)
            navigate('/')
          })
          .catch(error => {
            console.log(error)
          })
    }
    const handleSignUp = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        // const userData = Object.fromEntries(formData.entries());
        const email = formData.get('email');
        const password = formData.get('password')

        signinUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate(`${location.state ? location.state : '/'}`)
                Swal.fire({
                    title: "Drag me!",
                    icon: "success",
                    draggable: true
                });
            })
            // e.target.reset()
            .catch(error => {
                console.log(error)
            })
        fetch('https://my-mongo-project-server.vercel.app/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => {

                console.log('after coming data', data)
            })
    }

    return (
        <div>
            <div className="card mx-auto lg:mt-25 lg:my-40 my-4  mb-42 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-4xl text-center font-bold">SignIn now!</h1>
                    <form onSubmit={handleSignUp}
                        className="fieldset">
                        <label className="label" >Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button onClick={handleGoogleSignIn}
                            className='btn' type='button'>
                            <FcGoogle size={24} />
                            Signin with Google </button>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <p className='text-center mt-2'>new this side please
                            <Link className='text-pink-700  ' to='/register'> Register </Link>
                        </p>

                    </form>
                </div>
            </div>
        </div>

    );
};

export default SignIn;

// https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-malamin59
//git remote add origin https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-malamin59.git