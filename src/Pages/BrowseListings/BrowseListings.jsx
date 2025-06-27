

import { Link, useLoaderData } from "react-router-dom";

const BrowseListings = () => {
  const allPosts = useLoaderData();

  return (
    <div className="lg:mt-8 mt-4 mb-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
        All Roommate Listings
      </h2>

      {allPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allPosts.map((post) => (
            <div
              key={post._id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {post.location}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Room Type:</strong> {post.roomType}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Availability:</strong> {post.availability}
              </p>
                     <div className="mt-4 text-right">
                <Link to={`/users/${post._id}`}>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 italic mt-12">
          No listings found.
        </p>
      )}
    </div>
  );
};

export default BrowseListings;
