import React from 'react';
import { FiHome, FiUser } from 'react-icons/fi';
import { useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../../Context/AuthContext';
// import { use, useContext, useEffect, useState } from 'react';

const Update = () => {
    const updateUser = useLoaderData()
    console.log(updateUser)

// const { user } = useContext(AuthContext);
//     const [users, setUsers] = useState([]);   
//     useEffect(() => {
//         if (user?.email) {
//             fetch(`https://my-mongo-project-server.vercel.app/myPost/${user.email}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);
//                     setUsers(data);
//                 });
//         }
//     }, [user]);

    const handleUpdateListing = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData)
    }

    return (
        <div>

            <div className=" lg:mt-8 mt-16 bg-gray-100 flex justify-center items-center px-4 py-10">
                <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-10 flex items-center justify-center gap-2">
                        <FiHome size={32} /> Update Your Roommate Listing
                    </h2>

                    <form
                        onSubmit={handleUpdateListing}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Room Details */}
                        <h3 className="col-span-full text-xl font-semibold text-indigo-600 mt-2 flex items-center gap-2">
                            <FiHome size={24} /> Room Details
                        </h3>

                        <div className="col-span-full">
                            <label className="text-sm font-medium mb-1  block"> Title</label>
                            <input type="text"  name="title" placeholder="Looking for a roommate in Dhaka" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" required />
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
                            {/* <FiUse size={24} />  */}
                            Preferences
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
                            {/* <FiUse size={24} /> */}
                            Your Info
                        </h3>

                        <div>
                            <label className="text-sm font-medium mb-1 block">User Name</label>
                            <input type="text" readOnly className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-not-allowed" />
                        </div>
                        <div>
                            <label className="text-sm font-medium mb-1 block">User Email</label>
                            <input type="email" readOnly className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-not-allowed" />
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


        </div>
    );
};

export default Update;

// import React, { useContext, useEffect, useState } from 'react';
// import { useLoaderData, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { AuthContext } from '../../Context/AuthContext';

// const Update = () => {
//   const post = useLoaderData(); // fetch করা আগের data
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     location: post.location,
//     rent: post.rent,
//     roomType: post.roomType,
//     availability: post.availability,
//     lifestyle: post.lifestyle,
//     contact: post.contact,
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     fetch(`https://my-mongo-project-server.vercel.app/myPost/${post._id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData)
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.modifiedCount > 0) {
//           Swal.fire({
//             icon: 'success',
//             title: 'Updated Successfully!',
//             text: 'Your post has been updated.',
//           });
//           navigate('/my-listing'); // Redirect back to listing
//         }
//       });
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-10 px-4">
//       <h2 className="text-2xl font-semibold text-center mb-6 text-blue-700">Update Your Roommate Post</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="input input-bordered w-full" required />
//         <input type="text" name="rent" value={formData.rent} onChange={handleChange} placeholder="Rent" className="input input-bordered w-full" required />
//         <input type="text" name="roomType" value={formData.roomType} onChange={handleChange} placeholder="Room Type" className="input input-bordered w-full" required />
//         <input type="text" name="availability" value={formData.availability} onChange={handleChange} placeholder="Availability" className="input input-bordered w-full" required />
//         <input type="text" name="lifestyle" value={formData.lifestyle} onChange={handleChange} placeholder="Lifestyle" className="input input-bordered w-full" />
//         <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact Info" className="input input-bordered w-full" required />

//         {/* Read-only user info */}
//         <input type="text" value={user?.displayName} readOnly className="input input-bordered w-full bg-gray-100" />
//         <input type="email" value={user?.email} readOnly className="input input-bordered w-full bg-gray-100" />

//         <button type="submit" className="btn btn-primary w-full">Update</button>
//       </form>
//     </div>
//   );
// };

// export default Update;
