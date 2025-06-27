import { Fade } from "react-awesome-reveal";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const Testimonials = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: feedbacks = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await axiosSecure.get("/addRmm");
      return res.data;
    },
  });
  console.log(feedbacks);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center my-20">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (isError) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Failed to load testimonials!",
    });
    return null;
  }

  return (
    <section className="my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        What Our Users Say
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {feedbacks.map((item, idx) => (
          <Fade key={idx} direction="up" triggerOnce>
            <div className="p-6 shadow-xl rounded-2xl bg-white dark:bg-slate-800">
              <h3 className="font-bold">{item.userName}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
              <p className="mt-2 text-yellow-500">⭐ {item.rating}/5</p>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
