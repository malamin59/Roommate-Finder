
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CalendarDays, ArrowRight } from 'lucide-react';

const PostRommMet = ({ postData }) => {
  return (
    <div className="my-20 px-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {postData.map((post) => (
          <div
            key={post._id}
            className="group bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                {post.title}
              </h3>

              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={18} />
                <span className="font-medium">Location:</span>
                <span>{post.location}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <CalendarDays size={18} />
                <span className="font-medium">Availability:</span>
                <span>{post.availability}</span>
              </div>

              <div className="pt-4 text-right">
                <Link to={`/users/${post._id}`}>
                  <button className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white py-2 px-5 rounded-full font-medium transition">
                    See More <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostRommMet;
