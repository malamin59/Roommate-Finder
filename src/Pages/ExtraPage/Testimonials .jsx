import { Typewriter } from "react-simple-typewriter";


const HowItWorks = () => {


  const steps = [
    {
      title: "Sign Up & Create Profile",
      icon: "📝",
      desc: "Provide your preferences to get better matches.",
    },
    {
      title: "Post or Browse Listings",
      icon: "📋",
      desc: "List your need or explore available rooms/roommates.",
    },
    {
      title: "Find Your Match",
      icon: "🤝",
      desc: "Connect and finalize your next perfect roommate.",
    },
  ];

  return (
    <section className="my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">
        <span>How It </span>
        <span className="text-blue-500">
          <Typewriter words={["Works", "Connects", "Helps You"]} loop />
        </span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 bg-blue-50 dark:bg-slate-800 rounded-2xl shadow-lg text-center"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;