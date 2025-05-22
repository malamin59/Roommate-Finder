import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';

const MyListing = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return; 
    fetch(`https://my-mongo-project-server.vercel.app/myPost/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://my-mongo-project-server.vercel.app/myPost/${id}`, { method: 'DELETE' })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              setUsers(users.filter(user => user._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "Your listing has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <p className="text-xl text-gray-500">Loading your listings...</p>
      </div>
    );
  }

  return (
    <div className="lg:mt-12 mt-20 mb-24 px-4 lg:px-12">
      <h2 className="text-3xl font-semibold mb-8 text-center text-blue-800">
        My Listings ({users.length})
      </h2>

      <div className="overflow-x-auto w-full">
        <table className="table-auto w-full min-w-[800px] border-collapse border border-gray-300">
          <thead className="bg-blue-100">
            <tr>
              {['Location', 'Rent', 'Room Type', 'Availability', 'Lifestyle', 'Contact Info', 'Action'].map((title, i) => (
                <th
                  key={i}
                  className="border border-gray-300 text-left px-4 py-3 text-lg font-medium text-gray-700"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-8 text-gray-500">
                  No listings found.
                </td>
              </tr>
            ) : (
              users.map((post) => (
                <tr
                  key={post._id}
                  className="hover:bg-blue-50 border-b border-gray-200"
                >
                  <td className="px-4 py-3">{post.location}</td>
                  <td className="px-4 py-3">{post.rent}</td>
                  <td className="px-4 py-3">{post.roomType}</td>
                  <td className="px-4 py-3">{post.availability}</td>
                  <td className="px-4 py-3">{post.lifestyle}</td>
                  <td className="px-4 py-3">{post.contact}</td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <Link to={`/update/${post._id}`}>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm transition">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListing;
