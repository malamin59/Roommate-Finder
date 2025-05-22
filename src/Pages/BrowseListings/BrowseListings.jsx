// import React from 'react';
// import { Link, useLoaderData } from 'react-router-dom';

// const BrowseListings = () => {
//     const allPosts = useLoaderData();
//     console.log(allPosts);

//     return (
//         <div className="mt-12 mb-20">
//             <div className="overflow-x-auto w-full">
//                 <table className="table table-fixed w-full min-w-[800px]">
//                     <thead>
//                         <tr>
//                             <th className="w-1/6 text-xl">Location</th>
//                             <th className="w-1/6 text-xl">Rent</th>
//                             <th className="w-1/6 text-xl">Room Type</th>
//                             <th className="w-1/6 text-xl">Availability</th>
//                             <th className="w-1/6 text-xl">Lifestyle</th>
//                             <th className="w-1/6 text-xl">Contact Info
//                             </th>
//                             <th className="w-1/6 text-xl text-right pr-4">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {allPosts.map((post) => (
//                             <tr key={post._id}>
//                                 <td>{post.location}</td>
//                                 <td>{post.rent}</td>
//                                 <td>{post.roomType}</td>
//                                 <td>{post.availability}</td>
//                                 <td>{post.lifestyle}</td>
//                                 <td>{post.contact}</td>
//                                 <td className="text-right pr-4">
//                                     <Link to={`/users/${post._id}`}>
//                                         <button className="btn bg-blue-700 text-white btn-xs">
//                                             See More</button>
//                                     </Link>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default BrowseListings;


import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BrowseListings = () => {
  const allPosts = useLoaderData();
  console.log(allPosts);

  return (
    <div className="mt-12 mb-20 px-4">
      <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
        <table className="min-w-[800px] w-full table-auto border-collapse">
          <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white sticky top-0">
            <tr>
              {[
                "Location",
                "Rent",
                "Room Type",
                "Availability",
                "Lifestyle",
                "Contact Info",
                "Action"
              ].map((heading, idx) => (
                <th
                  key={idx}
                  className={`py-4 px-6 text-left text-lg font-semibold ${
                    heading === "Action" ? "text-right pr-8" : ""
                  }`}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allPosts.map((post, idx) => (
              <tr
                key={post._id}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-blue-50 transition-colors duration-200"}
              >
                <td className="py-3 px-6 text-gray-700 font-medium">{post.location}</td>
                <td className="py-3 px-6 text-gray-700 font-medium">${post.rent}</td>
                <td className="py-3 px-6 text-gray-700 font-medium">{post.roomType}</td>
                <td className="py-3 px-6 text-gray-700 font-medium">{post.availability}</td>
                <td className="py-3 px-6 text-gray-700 font-medium">{post.lifestyle}</td>
                <td className="py-3 px-6 text-gray-700 font-medium">{post.contact}</td>
                <td className="py-3 px-6 text-right pr-8">
                  <Link to={`/users/${post._id}`}>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
                      See More
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
            {allPosts.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-8 text-gray-500 italic">
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

export default BrowseListings;
