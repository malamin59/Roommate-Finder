import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useLoaderData } from "react-router-dom";
import { FaUsers, FaListAlt } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";

const OverviewPage = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const data = useLoaderData();

  useEffect(() => {
    if (!user?.email) return;
    fetch(`https://my-mongo-project-server.vercel.app/myPost/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
        Dashboard Overview
      </h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Total Posts */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-300 rounded-xl shadow p-6 text-center hover:shadow-xl transition">
          <div className="flex justify-center text-5xl text-blue-700 mb-3">
            <FaListAlt />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-1">Total Posts</h3>
          <p className="text-4xl font-bold text-blue-800">{data.length}</p>
        </div>

        {/* My Posts */}
        <div className="bg-gradient-to-r from-purple-100 to-purple-300 rounded-xl shadow p-6 text-center hover:shadow-xl transition">
          <div className="flex justify-center text-5xl text-purple-700 mb-3">
            <MdPostAdd />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-1">My Posts</h3>
          <p className="text-4xl font-bold text-purple-800">{users.length}</p>
        </div>

        {/* User Info Count or Total Users */}
        <div className="bg-gradient-to-r from-green-100 to-green-300 rounded-xl shadow p-6 text-center hover:shadow-xl transition">
          <div className="flex justify-center text-5xl text-green-700 mb-3">
            <FaUsers />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-1">Logged in</h3>
          <p className="text-lg font-bold text-green-800">{user?.displayName || "Anonymous"}</p>
        </div>
      </div>

      {/* User Info */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">User Information</h3>
        <p className="text-gray-700 dark:text-gray-200">
          <strong>Name:</strong> {user?.displayName}
        </p>
        <p className="text-gray-700 dark:text-gray-200">
          <strong>Email:</strong> {user?.email}
        </p>
        {user?.photoURL && (
          <img
            src={user.photoURL}
            alt="User"
            className="w-24 h-24 mt-4 rounded-full border-4 border-blue-500"
          />
        )}
      </div>
    </div>
  );
};

export default OverviewPage;
