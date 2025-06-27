import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://my-mongo-project-server.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
