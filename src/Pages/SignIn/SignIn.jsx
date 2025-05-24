import React, { use, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase/firebase';

const SignIn = () => {
    const navigate = useNavigate();
    const { signinUser, provider } = use(AuthContext);
    const [error, setError] = useState(null);

    // Sign in with popup
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign in Successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setError("Google Sign-in failed. Please try again."); // Step 2
            });
    };

    const handleSignUp = e => {
        e.preventDefault();
        setError(null);

        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');

        signinUser(email, password)
            .then(result => {
                navigate('/');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Signed in Successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.error(error);
                setError("Invalid email or password. Please try again."); // Step 2
            });
    };

    return (
        <div>
            <div className="card mx-auto lg:mt-25 lg:my-40 my-4 mb-42 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-4xl text-center font-bold">Sign In Now!</h1>
                    <form onSubmit={handleSignUp}>
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />

                        <div><a className="link link-hover">Forgot password?</a></div>

                        {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
                        <button onClick={handleGoogleSignIn}
                            className='btn w-full mt-3' type='button'>
                            <FcGoogle size={24} /> Sign in with Google
                        </button>

                        <button className="btn w-full btn-neutral mt-4">Login</button>

                        <p className='text-center mt-2'>
                            New here?
                            <Link className='text-pink-700' to='/register'> Register </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
