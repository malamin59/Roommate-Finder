import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BiLike, BiMap, BiMoney, BiPhone, BiCalendar } from 'react-icons/bi';
import { FaBed, FaUserFriends, FaRegStickyNote } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthContext';

const PostDetailsPage = () => {
  const postDetails = useLoaderData();
  const { user } = useContext(AuthContext);

  const {
    _id, title, roomType, rent, location,
    lifestyle, description, contact, userEmail, availability, likes = 0
  } = postDetails;
  const currentUser = user?.email;
  const isPostOwner = currentUser === userEmail
  // console.log(postDetails)

  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    if (isLiked) return;

    const updatedLikes = likeCount + 1;
    setLikeCount(updatedLikes);
    setIsLiked(true);
    try {
      const res = await fetch(`https://my-mongo-project-server.vercel.app/addRmmAll/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ likes: updatedLikes }),
      });
      const data = await res.json();
      // console.log('Like updated:', data);
    } catch (err) {
      console.error('Failed to update like:', err);
    }
  };

  return (
    <div className="min-h-screen lg:mt-1 mt-2 bg-gradient-to-br from-blue-50 via-white to-purple-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-10 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">
          {title}
        </h2>
        <p className="flex items-center dark:text-blue-700 gap-2">
          <BiLike className="text-blue-600 " />
          <span className="font-semibold dark:text-blue-700">Likes:</span> {likeCount}
        </p>
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


          <p className="flex items-start gap-2">
            <FaRegStickyNote className="text-indigo-500 mt-1" />
            <span className="font-semibold">Description:</span>
            <span className="whitespace-pre-wrap">{description}</span>
          </p>



        </div>


        <div className="mt-8 flex justify-center">
          {isPostOwner ? (
            <p className="text-red-500 italic">You can't like your own post</p>
          ) : (
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-6 py-3 ${isLiked ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                } text-white rounded-full shadow-lg transition duration-300`}
            >
              <BiLike size={20} />
              {isLiked ? 'Liked' : 'Like'}
            </button>
          )}
        </div>
        {
          isLiked ? (
            <p className="flex items-center dark:text-blue-700 gap-2">
              <BiPhone className="text-gray-600" />
              <span className="font-semibold">Contact:</span> {contact}
            </p>) : (
            <p className="flex items-center gap-2 dark:text-blue-700 text-red-500 italic">
              <BiPhone className="text-gray-600" />
              <span className="font-semibold ">Contact:</span> Like this post to view contact number
            </p>
          )
        }

      </div>
    </div>
  );
};

export default PostDetailsPage;
