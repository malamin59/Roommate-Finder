import { toast } from "react-toastify";
import { useState } from "react";
import MyListing from "../MyListingPage/MyListing";
import { useNavigate } from "react-router-dom";

const PhotoPage = () => {
    const [isValid, setIsValid] = useState(false); // Track login status
  const navigate = useNavigate()
    const handlePass = (e) => {
        e.preventDefault();
                const form = e.target;
        const name = form.name.value.trim();
        const password = form.password.value.trim();

        if (!name) {
            toast.error("Name is required");
            return;
        }

        if (!password) {
            toast.error("Password is required");
            return;
        }
        if (password !== "34278973am") {
            toast.error("Please enter valid password");
            return;
        }

        if (name !== "moontaha") {
            toast.error("Please enter valid name");
            return;
        }

        // If both valid
        setIsValid(true);
        toast.success("Login successful!");
        navigate ('/allPhotoPage')
    };

    // Show MyListing page if login is valid
    // if (isValid) {
    //     return <MyListing />;
    // }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse lg:mt-10 lg:mb-12 mt-8 mb-16">
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Please enter your credentials to access your listing.
                        </p>
                        <form onSubmit={handlePass}>
                            <label className="label">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="input input-bordered"
                                placeholder="Enter your name"
                            />
                            <label className="label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="input input-bordered"
                                placeholder="Password"
                            />
                            <button className="btn btn-neutral mt-4 w-full" type="submit">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoPage;
