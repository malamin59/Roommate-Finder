// import useAuth from "../../Hooks/useAuth"; // your custom auth hook
// import { useEffect, useState } from "react";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";

import { use, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Context/AuthContext";

const OverviewPage = () => {
  const { user } = use(AuthContext);

  //   const { user } = ();
  const axiosSecure = useAxiosSecure();
  const [stats, setStats] = useState({
    totalItems: 0,
    myItems: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const totalRes = await axiosSecure.get("/items/count");
      const myRes = await axiosSecure.get(
        `/items/my-count?email=${user.email}`
      );
      setStats({
        totalItems: totalRes.data.count,
        myItems: myRes.data.count,
      });
    };
    fetchStats();
  }, [axiosSecure, user]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
            Total Items
          </h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {stats.totalItems}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
            My Items
          </h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">
            {stats.myItems}
          </p>
        </div>
      </div>

      {/* User Info */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Logged-in User Info</h3>
        <p>
          <strong>Name:</strong> {user.displayName}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        {user.photoURL && (
          <img
            src={user.photoURL}
            alt="User"
            className="w-20 mt-4 rounded-full"
          />
        )}
      </div>
    </div>
  );
};

export default OverviewPage;
