// components/AnimatedFeatures.jsx
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FeatureCard = ({ icon, title, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      className="bg-white p-8 rounded-xl shadow-xl text-center relative z-10 overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Background gradient that appears on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
      
      <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
        <Image
          src={icon}
          alt={title}
          width={40}
          height={40}
          className="text-blue-600"
        />
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600">
        {description}
      </p>
      
      <div className="absolute w-20 h-20 bg-blue-100 rounded-full -bottom-10 -right-10 opacity-20"></div>
      <div className="absolute w-12 h-12 bg-indigo-100 rounded-full -top-6 -left-6 opacity-20"></div>
    </motion.div>
  );
};

export default function AnimatedFeatures() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const features = [
    {
      icon: "/goal-icon.svg",
      title: "Set Any Goal",
      description: "Create short-term or long-term goals with customizable deadlines and descriptions."
    },
    {
      icon: "/ai-icon.svg",
      title: "AI-Powered Milestones",
      description: "Get intelligent milestone suggestions tailored to your goals to keep you on track."
    },
    {
      icon: "/timeline-icon.svg",
      title: "Track Progress",
      description: "Monitor your milestones with clear timelines and mark them as complete."
    },
    {
      icon: "/notification-icon.svg",
      title: "Stay Reminded",
      description: "Receive timely notifications to update your progress or meet upcoming deadlines."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute w-96 h-96 bg-blue-200 rounded-full -top-20 -left-20 opacity-20"></div>
        <div className="absolute w-96 h-96 bg-indigo-200 rounded-full -bottom-20 -right-20 opacity-20"></div>
        <div className="absolute w-72 h-72 bg-blue-100 rounded-full top-1/4 right-10 opacity-10"></div>
        <div className="absolute w-72 h-72 bg-indigo-100 rounded-full bottom-1/4 left-10 opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            Why Choose <span className="text-blue-600">Goal Tracker</span>?
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Our platform combines cutting-edge technology with thoughtful design to help you reach your goals faster.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}