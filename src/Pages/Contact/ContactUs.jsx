import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ContactUs = () => {
  const axios = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
  // console.log("Form submitted:", data);

  try {
    const res = await axios.post("/contact", data);
    if (res.data?.insertedId) {
      Swal.fire("Success!", "Message sent successfully!", "success");
      reset();
    }
    console.log(res.data)
  } catch (err) {
    console.error(err);
    Swal.fire("Error", "Something went wrong!", "error");
  }
};
  return (
    <div className="min-h-screen px-4 lg:py-12 mb-12 bg-base-100 text-base-content">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8"
      >
        <motion.h2
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-extrabold mb-8 text-center text-primary"
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg"
          >
            <div className="flex items-center gap-4">
              <FaPhone className="text-xl text-primary" />
              <span className="font-medium">+880 1234 567890</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-xl text-primary" />
              <span className="font-medium">support@roommatefinder.com</span>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-xl text-primary mt-1" />
              <span className="font-medium">Dhaka, Bangladesh</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              {...register("number", { required: true })}
              type="number"
              placeholder="Your Number"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <textarea
              {...register("message", { required: true })}
              className="textarea textarea-bordered w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Message"
              required
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary w-full hover:scale-[1.02] transition duration-200"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
