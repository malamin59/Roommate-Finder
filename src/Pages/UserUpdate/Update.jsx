import React from 'react';
import { FiHome, FiUser } from 'react-icons/fi';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const updateUser = useLoaderData();
    const { _id } = updateUser
    // console.log(updateUser)
    const handleUpdateListing = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData.entries());
        // console.log(userData)
        fetch(`https://my-mongo-project-server.vercel.app/addRmmAll/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Post update successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
    }

    return (
        <div>

            <div className=" lg:mt-1 mt-2 mb-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex justify-center items-center px-4 py-10">
                <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-10 flex items-center justify-center gap-2">
                        <FiHome size={32} /> Update Your Roommate Listing
                    </h2> 

                    <form
                        onSubmit={handleUpdateListing}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl shadow-xl p-8 md:p-12">
                        {/* Room Details */}
                        <h3 className="col-span-full text-xl font-semibold text-indigo-600 mt-2 flex items-center gap-2">
                            <FiHome size={24} /> Room Details
                        </h3>

                        <div className="col-span-full">
                            <label className="text-sm font-medium mb-1  block"> Title</label>
                            <input type="text" defaultValue={updateUser?.title} name="title" placeholder="Looking for a roommate in Dhaka" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" required />
                        </div>

                        <div>
                            <label className="text-sm font-medium mb-1 block">Location</label>
                            <input type="text" name="location" defaultValue={updateUser?.location} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" required />
                        </div>

                        <div>
                            <label className="text-sm font-medium mb-1 block">Rent (৳)</label>
                            <input type="text" name="rent" defaultValue={updateUser?.rent} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" required />
                        </div>

                        <div>
                            <label className="text-sm font-medium mb-1 block">Room Type</label>
                            <select name="roomType" defaultValue={updateUser?.roomType} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" required>
                                <option disabled value="">-- Select Room Type --</option>
                                <option value="Single">Single</option>
                                <option value="Shared">Shared</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm font-medium mb-1 block">Availability</label>
                            <select name="availability" defaultValue={updateUser?.availability
                            } className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" required>
                                <option disabled value="">-- Select --</option>
                                <option value="Available">Available</option>
                                <option value="Not Available">Not Available</option>
                            </select>
                        </div>

                        {/* Preferences */}
                        <h3 className="col-span-full text-xl font-semibold text-indigo-600 mt-4 flex items-center gap-2">
                            {/* <FiUse size={24} />  */}
                            Preferences
                        </h3>

                        <div>
                            <label className="text-sm font-medium mb-1 block">Lifestyle Preferences</label>
                            <select name="lifestyle" defaultValue={updateUser?.lifestyle} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" required>
                                <option disabled value="">-- Select Preference --</option>
                                <option value="Pets">Pets</option>
                                <option value="Smoking">Smoking</option>
                                <option value="Night Owl">Night Owl</option>
                            </select>
                        </div>

                        {/* Contact Info */}
                        <h3 className="col-span-full text-xl font-semibold text-indigo-600 mt-4 flex items-center gap-2">
                            {/* <FiPhon size={24} />  */}
                            Contact Info
                        </h3>

                        <div className="col-span-full">
                            <label className="text-sm font-medium mb-1 block">Contact Number</label>
                            <div className="flex">
                                <select name="countryCode" className="w-28 px-2 py-2 border border-gray-300 rounded-l-lg bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" required>
                                    <option value="+880">🇧🇩 +880</option>
                                    <option value="+91">🇮🇳 +91</option>
                                    <option value="+1">🇺🇸 +1</option>
                                    <option value="+44">🇬🇧 +44</option>
                                    <option value="+61">🇦🇺 +61</option>
                                </select>
                                <input type="tel" defaultValue={updateUser?.contact} name="contactNumber" placeholder="1234567890" className="w-full px-4 py-2 border-t border-b border-r border-gray-300 rounded-r-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" required />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="col-span-full">
                            <label className="text-sm font-medium mb-1  items-center gap-2">
                                Description
                            </label>
                            <textarea name="description" rows="4" defaultValue={updateUser?.description} className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" required />
                        </div>

                        {/* User Info */}
                        <h3 className="col-span-full text-xl font-semibold text-indigo-600 mt-4 flex items-center gap-2">
                            {/* <FiUse size={24} /> */}
                            Your Info
                        </h3>

                        <div>
                            <label className="text-sm font-medium mb-1 block">User Name</label>
                            <input type="text" defaultValue={updateUser?.userName} readOnly className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-not-allowed" />
                        </div>
                        <div>
                            <label className="text-sm font-medium mb-1 block">User Email</label>
                            <input type="email" defaultValue={updateUser?.userEmail} readOnly className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-not-allowed" />
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-full mt-4">
                            <button type="submit" className="w-full bg-indigo-600     text-white py-3 rounded-lg font-semibold   hover:bg-indigo-700 transition duration-300">
                                Update Listing
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Update;
