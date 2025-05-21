import React, { use } from 'react';
import { FiHome, FiUsers, FiPhone, FiUser } from 'react-icons/fi';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const AddListing = () => {
    const { user } = use(AuthContext);
    const userName = user?.displayName || "noname";
    const userEmail = user?.email || "No email";
    // console.log(user)
    // console.log(user.email)
    // const userName = "John Doe";
    // const userEmail = "john@example.com";

    const handleAddListing = (e) => {
        e.preventDefault();
        const form = e.target;
        const listingData = {
            title: form.title.value,
            location: form.location.value,
            rent: form.rent.value,
            roomType: form.roomType.value,
            lifestyle: form.lifestyle.value,
            description: form.description.value,
            contact: form.countryCode.value + form.contactNumber.value,
            availability: form.availability.value,
            // userEmail,
            // userName
        };
        console.log(listingData);
        fetch('http://localhost:4000/addRmm', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(listingData)
        })
            .then(res => res.json())
            .then(data => {
                !
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Post is Successfully !",
                        showConfirmButton: false,
                        timer: 1500
                    });

                console.log("after coming", data)
            })
        // alert("Listing submitted successfully!");
        form.reset();
    };

    return (
        <div className=" lg:mt-8 mt-16 bg-gray-100 flex justify-center items-center px-4 py-10">
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-10 flex items-center justify-center gap-2">
                    <FiHome size={32} /> Add Your Roommate Listing
                </h2>

                <form onSubmit={handleAddListing} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Room Details */}
                    <h3 className="col-span-full text-xl font-semibold text-indigo-600 mt-2 flex items-center gap-2">
                        <FiHome size={24} /> Room Details
                    </h3>

                    <div className="col-span-full">
                        <label className="text-sm font-medium mb-1 block">Title</label>
                        <input type="text" name="title" placeholder="Looking for a roommate in Dhaka" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" required />
                    </div>

                    <div>
                        <label className="text-sm font-medium mb-1 block">Location</label>
                        <input type="text" name="location" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" required />
                    </div>

                    <div>
                        <label className="text-sm font-medium mb-1 block">Rent (৳)</label>
                        <input type="text" name="rent" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" required />
                    </div>

                    <div>
                        <label className="text-sm font-medium mb-1 block">Room Type</label>
                        <select name="roomType" defaultValue="" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" required>
                            <option disabled value="">-- Select Room Type --</option>
                            <option value="Single">Single</option>
                            <option value="Shared">Shared</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-sm font-medium mb-1 block">Availability</label>
                        <select name="availability" defaultValue="" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" required>
                            <option disabled value="">-- Select --</option>
                            <option value="Available">Available</option>
                            <option value="Not Available">Not Available</option>
                        </select>
                    </div>

                    {/* Preferences */}
                    <h3 className="col-span-full text-xl font-semibold text-indigo-600 mt-4 flex items-center gap-2">
                        <FiUsers size={24} /> Preferences
                    </h3>

                    <div>
                        <label className="text-sm font-medium mb-1 block">Lifestyle Preferences</label>
                        <select name="lifestyle" defaultValue="" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" required>
                            <option disabled value="">-- Select Preference --</option>
                            <option value="Pets">Pets</option>
                            <option value="Smoking">Smoking</option>
                            <option value="Night Owl">Night Owl</option>
                        </select>
                    </div>

                    {/* Contact Info */}
                    <h3 className="col-span-full text-xl font-semibold text-indigo-600 mt-4 flex items-center gap-2">
                        <FiPhone size={24} /> Contact Info
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
                            <input type="tel" name="contactNumber" placeholder="1234567890" className="w-full px-4 py-2 border-t border-b border-r border-gray-300 rounded-r-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" required />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="col-span-full">
                        <label className="text-sm font-medium mb-1  items-center gap-2">
                            Description
                        </label>
                        <textarea name="description" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" required />
                    </div>

                    {/* User Info */}
                    <h3 className="col-span-full text-xl font-semibold text-indigo-600 mt-4 flex items-center gap-2">
                        <FiUser size={24} /> Your Info
                    </h3>

                    <div>
                        <label className="text-sm font-medium mb-1 block">User Name</label>
                        <input type="text" value={userName} readOnly className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-not-allowed" />
                    </div>
                    <div>
                        <label className="text-sm font-medium mb-1 block">User Email</label>
                        <input type="email" value={userEmail} readOnly className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-not-allowed" />
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-full mt-4">
                        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
                            Submit Listing
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddListing;
