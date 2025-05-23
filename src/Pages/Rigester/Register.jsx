import React, { use } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, provider, setUser, updateUser } = use(AuthContext);
    const registerWithPopUp = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                Swal.fire({
                    title: "Register SUccessfully !",
                    icon: "success",
                    draggable: true
                });
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');
        const name = formData.get('name');
        const photo = formData.get('photo')

        const usersData = Object.fromEntries(formData.entries());
        console.log(usersData)
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;
        fetch('https://my-mongo-project-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(usersData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        if (!isLongEnough) {
            toast.error("Password must be at least 6 characters long.");
            return;
        }

        if (!hasUppercase) {
            toast.error("Password must contain at least one uppercase letter.");
            return;
        }

        if (!hasLowercase) {
            toast.error("Password must contain at least one lowercase letter.");
            return;
        }
        //  console.log(usersData)
        createUser(email, password)
            .then(result => {
                updateUser({
                    displayName: name,
                    photoURL: photo
                })
                const user = result.user
                setUser(user);
                console.log(user)
                navigate('/')
                Swal.fire({
                    title: "Register Successfully",
                    icon: "success",
                    draggable: true
                });
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='flex justify-center lg:mt-0 mt-10 mb-20 lg:min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h3 className='text-3xl  font-bold text-center'>Register your account!</h3>
                    <form onSubmit={handleRegister}>
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" />
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL" />

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name='password' />
                        {/* <button
                            //  onClick={handleGoogleSignIn}

                                type='button' className="btn  font-black w-full mt-4">
                                <FcGoogle size={24} /> Login in with Google</button> */}
                        <button onClick={registerWithPopUp}
                            className='text-center btn  w-full mt-3'>
                            <FcGoogle size={24} /> Sign in With Google  </button>
                        <button
                            type='submit' className="btn btn-neutral mt-2 w-full">
                            Register</button>
                        <p className='text-center font-semibold pt-5'>Already Have An Account?
                            <Link className='text-secondary' to='/signin'> Login </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default Register;