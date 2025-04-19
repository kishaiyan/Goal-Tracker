// components/AnimatedCTA.jsx
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function AnimatedCTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  return (
    <section 
      className="py-24 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>
        
        {/* Animated circles */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-200 opacity-30 top-10 -left-16"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut" 
          }}
        />
        
        <motion.div
          className="absolute w-60 h-60 rounded-full bg-indigo-200 opacity-20 bottom-10 right-10"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut" 
          }}
        />
        
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-blue-100 opacity-30 bottom-24 left-1/4"
          animate={{ 
            x: [0, 10, 0],
            y: [0, 10, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-10 shadow-xl relative z-10">
          <motion.div
            className="absolute -top-6 -left-6 w-12 h-12 bg-blue-600 rounded-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
          
          <motion.div
            className="absolute -bottom-6 -right-6 w-12 h-12 bg-indigo-600 rounded-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          
          <div className="text-center">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Start Your Journey?
            </motion.h2>
            
            <motion.p
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Join thousands of users achieving their goals with Goal Tracker. Sign up today and transform your goals into achievements.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="/sign-up"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition transform duration-300"
              >
                Sign Up Now
              </Link>
              
              <Link
                href="/testimonials"
                className="inline-block border-2 border-blue-600 text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition"
              >
                See Success Stories
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}