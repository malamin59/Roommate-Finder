import { Link, useLoaderData } from "react-router-dom";

const BroseCollection = () => {
  const allPosts = useLoaderData();

  return (
    <div className="lg:mt-8 mt-4 mb-20 px-4">
        
<h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
        All Roommate Listings
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
        <table className="min-w-[800px] w-full table-fixed border-collapse">
          <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white sticky top-0">
            <tr>
              <th className="py-4 px-6 text-left text-lg font-semibold w-[15%]">
                Location
              </th>
              <th className="py-4 px-6 text-left text-lg font-semibold w-[15%]">
                Room Type
              </th>
              <th className="py-4 px-6 text-left text-lg font-semibold w-[15%]">
                Availability
              </th>
              <th className="py-4 px-6 text-left text-lg font-semibold w-[20%]">
                Lifestyle
              </th>
              <th className="py-4 px-6 text-left text-lg font-semibold w-[20%]">
                Contact Info
              </th>
              <th className="py-4 px-6 text-right text-lg font-semibold w-[15%] pr-8">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allPosts.length > 0 ? (
              allPosts.map((post, idx) => (
                <tr
                  key={post._id}
                  className={`${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-blue-50 transition-colors duration-200`}
                >
                  <td className="py-3 px-6 text-gray-700 font-medium truncate">
                    {post.location}
                  </td>
                  <td className="py-3 px-6 text-gray-700 font-medium truncate">
                    {post.roomType}
                  </td>
                  <td className="py-3 px-6 text-gray-700 font-medium truncate">
                    {post.availability}
                  </td>
                  <td className="py-3 px-6 text-gray-700 font-medium truncate">
                    {post.lifestyle}
                  </td>
                  <td className="py-3 px-6 text-gray-700 font-medium truncate">
                    {post.contact}
                  </td>
                  <td className="py-3 px-6 text-right pr-8">
                    <Link to={`/users/${post._id}`}>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
                        See More
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-8 text-gray-500 italic"
                >
                  No listings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BroseCollection;
