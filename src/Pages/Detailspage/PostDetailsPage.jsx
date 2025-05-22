import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BiLike, BiMap, BiMoney, BiPhone, BiCalendar } from 'react-icons/bi';
import { FaBed, FaUserFriends, FaRegStickyNote } from 'react-icons/fa';

const PostDetailsPage = () => {
    const postDetails = useLoaderData();
    const {
        title, roomType, rent, location,
        lifestyle, description, contact, availability
    } = postDetails;

    return (
        <div className="min-h-screen lg:mt-8 mt-15 bg-gradient-to-br from-blue-50 via-white to-purple-100 py-16 px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-10 relative overflow-hidden">

                {/* Background Shapes */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>

                <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">
                    {title}
                </h2>

                <div className="space-y-4 text-gray-700 text-lg">
                    <p className="flex items-center gap-2">
                        <BiMap className="text-blue-500" />
                        <span className="font-semibold">Location:</span> {location}
                    </p>
                    <p className="flex items-center gap-2">
                        <BiMoney className="text-green-600" />
                        <span className="font-semibold">Rent:</span> {rent}
                    </p>
                    <p className="flex items-center gap-2">
                        <FaBed className="text-purple-600" />
                        <span className="font-semibold">Room Type:</span> {roomType}
                    </p>
                    <p className="flex items-center gap-2">
                        <FaUserFriends className="text-orange-600" />
                        <span className="font-semibold">Lifestyle:</span> {lifestyle}
                    </p>
                    <p className="flex items-center gap-2">
                        <BiCalendar className="text-pink-600" />
                        <span className="font-semibold">Availability:</span> {availability}
                    </p>
                    <p className="flex items-center gap-2">
                        <BiPhone className="text-gray-600" />
                        <span className="font-semibold">Contact:</span> {contact}
                    </p>
                    <p className="flex items-start gap-2">
                        <FaRegStickyNote className="text-indigo-500 mt-1" />
                        <span className="font-semibold">Description:</span>
                        <span className="whitespace-pre-wrap">{description}</span>
                    </p>
                    <p className="flex items-center gap-2">
                        <BiLike className="text-blue-600" />
                        <span className="font-semibold">Likes:</span> 2
                    </p>
                </div>

                <div className="mt-8 flex justify-center">
                    <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition duration-300">
                        <BiLike size={20} />
                        Like
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostDetailsPage;
