"use client"

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamically import Three.js based components to prevent SSR issues
const AnimatedHero = dynamic(() => import("../../components/AnimatedHero"), { ssr: false });
const Sphere3D = dynamic(() => import("../../components/Sphere3D"), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar with glass effect */}
      <header className="fixed w-full z-50">
        <div className="backdrop-blur-md bg-white/70 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="font-bold text-xl text-blue-600 flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
                  />
                </svg>
                Goal Tracker
              </Link>
              
              <nav className="hidden md:flex space-x-8">
                <Link href="/features" className="text-gray-600 hover:text-blue-600 transition">
                  Features
                </Link>
                <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition">
                  Pricing
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">
                  About
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">
                  Contact
                </Link>
              </nav>
              
              <div className="flex items-center space-x-4">
                <Link href="/login" className="text-gray-600 hover:text-blue-600 transition hidden md:inline-block">
                  Log In
                </Link>
                <Link href="/sign-up" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                  Sign Up
                </Link>
                <button className="md:hidden text-gray-600">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 6h16M4 12h16M4 18h16" 
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with 3D effect */}
      <AnimatedHero />

      {/* Features Section with scroll animations */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* 3D Sphere Decoration */}
        <Sphere3D position="right" size={300} color="#3b82f6" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
            {/* Feature 1: Goal Setting */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl text-center relative z-10 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Background gradient that appears on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              
              <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/goal-icon.svg"
                  alt="Goal Setting"
                  width={40}
                  height={40}
                  className="text-blue-600"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                Set Any Goal
              </h3>
              
              <p className="text-gray-600">
                Create short-term or long-term goals with customizable deadlines and descriptions.
              </p>
            </motion.div>
            
            {/* Feature 2: AI Milestones */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl text-center relative z-10 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              
              <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/ai-icon.svg"
                  alt="AI Milestones"
                  width={40}
                  height={40}
                  className="text-blue-600"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                AI-Powered Milestones
              </h3>
              
              <p className="text-gray-600">
                Get intelligent milestone suggestions tailored to your goals to keep you on track.
              </p>
            </motion.div>
            
            {/* Feature 3: Milestone Tracking */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl text-center relative z-10 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              
              <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/timeline-icon.svg"
                  alt="Milestone Tracking"
                  width={40}
                  height={40}
                  className="text-blue-600"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                Track Progress
              </h3>
              
              <p className="text-gray-600">
                Monitor your milestones with clear timelines and mark them as complete.
              </p>
            </motion.div>
            
            {/* Feature 4: Notifications */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-xl text-center relative z-10 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              
              <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/notification-icon.svg"
                  alt="Notifications"
                  width={40}
                  height={40}
                  className="text-blue-600"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                Stay Reminded
              </h3>
              
              <p className="text-gray-600">
                Receive timely notifications to update your progress or meet upcoming deadlines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section with Parallax Effect */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/pattern-dots.svg")',
            backgroundSize: '30px 30px',
            opacity: 0.1
          }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear"
          }}
        />
        
        <Sphere3D position="left" size={250} color="#4f46e5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            <div className="p-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-blue-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" 
                  />
                </svg>
              </motion.div>
              <motion.h3 
                className="text-4xl font-bold mb-2 text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                10,000+
              </motion.h3>
              <p className="text-gray-600">Active Users</p>
            </div>
            
            <div className="p-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-indigo-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </motion.div>
              <motion.h3 
                className="text-4xl font-bold mb-2 text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                500,000+
              </motion.h3>
              <p className="text-gray-600">Goals Completed</p>
            </div>
            
            <div className="p-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-blue-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
                  />
                </svg>
              </motion.div>
              <motion.h3 
                className="text-4xl font-bold mb-2 text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                4.9/5
              </motion.h3>
              <p className="text-gray-600">User Rating</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section with Timeline */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              How Goal Tracker Works
            </motion.h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          </div>
          
          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
            
            {/* Step 1 */}
            <motion.div 
              className="relative mb-24"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center">
                <div className="w-1/2 pr-10 text-right">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">Create Your Goals</h3>
                  <p className="text-gray-600">Define what you want to achieve and set deadlines that work for your timeline.</p>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10">
                  <span className="text-white font-bold">1</span>
                </div>
                
                <div className="w-1/2 pl-10">
                  <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                    <Image 
                      src="/create-goals.svg" 
                      alt="Create Goals"
                      width={300}
                      height={200}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              className="relative mb-24"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center">
                <div className="w-1/2 pr-10">
                  <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
                    <Image 
                      src="/ai-suggestions.svg" 
                      alt="AI Suggestions"
                      width={300}
                      height={200}
                      className="mx-auto"
                    />
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 border-4 border-white shadow-lg z-10">
                  <span className="text-white font-bold">2</span>
                </div>
                
                <div className="w-1/2 pl-10 text-left">
                  <h3 className="text-2xl font-bold text-indigo-600 mb-2">Get AI Milestone Suggestions</h3>
                  <p className="text-gray-600">Our AI analyzes your goals and suggests actionable milestones to help you stay on track.</p>
                </div>
              </div>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              className="relative mb-24"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center">
                <div className="w-1/2 pr-10 text-right">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">Track Your Progress</h3>
                  <p className="text-gray-600">Monitor your milestones and celebrate your wins as you make progress toward your goals.</p>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10">
                  <span className="text-white font-bold">3</span>
                </div>
                
                <div className="w-1/2 pl-10">
                  <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                    <Image 
                      src="/progress-tracking.svg" 
                      alt="Progress Tracking"
                      width={300}
                      height={200}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Step 4 */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center">
                <div className="w-1/2 pr-10">
                  <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
                    <Image 
                      src="/achievements.svg" 
                      alt="Achieve Goals"
                      width={300}
                      height={200}
                      className="mx-auto"
                    />
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 border-4 border-white shadow-lg z-10">
                  <span className="text-white font-bold">4</span>
                </div>
                
                <div className="w-1/2 pl-10 text-left">
                  <h3 className="text-2xl font-bold text-indigo-600 mb-2">Achieve Your Goals</h3>
                  <p className="text-gray-600">Reach your targets faster with AI-driven insights and suggestions for continuous improvement.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <Sphere3D position="right" size={200} color="#6366f1" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
              What Our Users Say
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image
                    src="/testimonial-1.jpg"
                    alt="User"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="pt-6 text-center">
                <p className="text-gray-600 italic mb-4">
                  "Goal Tracker completely changed how I approach my personal projects. The AI suggestions for milestones were spot on and helped me stay motivated."
                </p>
                <h4 className="font-bold text-gray-800">Sarah J.</h4>
                <p className="text-sm text-gray-500">Product Designer</p>
              </div>
            </motion.div>
            
            {/* Testimonial 2 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image
                    src="/testimonial-2.jpg"
                    alt="User"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="pt-6 text-center">
                <p className="text-gray-600 italic mb-4">
                  "As a team leader, I needed a way to track multiple projects. Goal Tracker's intuitive interface makes it easy to manage everything in one place."
                </p>
                <h4 className="font-bold text-gray-800">Michael T.</h4>
                <p className="text-sm text-gray-500">Marketing Director</p>
              </div>
            </motion.div>
            
            {/* Testimonial 3 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image
                    src="/testimonial-3.jpg"
                    alt="User"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="pt-6 text-center">
                <p className="text-gray-600 italic mb-4">
                  "I've tried many goal tracking apps, but this one stands out with its AI features. The milestone suggestions have helped me break down my goals into achievable steps."
                </p>
                <h4 className="font-bold text-gray-800">Anita R.</h4>
                <p className="text-sm text-gray-500">Freelance Developer</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
              Simple, Transparent Pricing
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Choose the plan that works best for your goals. No hidden fees.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <motion.div
              className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Free</h3>
                <div className="text-blue-600 text-4xl font-bold mb-4">$0</div>
                <p className="text-gray-600 mb-6">Perfect for individuals getting started</p>
                
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Up to 5 goals</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Basic milestone tracking</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Email reminders</span>
                  </li>
                </ul>
                
                <Link href="/sign-up" className="block w-full py-3 px-6 text-center bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium rounded-lg transition">
                  Get Started
                </Link>
              </div>
            </motion.div>
            
            {/* Pro Plan */}
            <motion.div
              className="bg-blue-600 rounded-2xl shadow-xl overflow-hidden transform scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-blue-700 text-white text-center py-2 text-sm font-bold">
                MOST POPULAR
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 text-white">Pro</h3>
                <div className="text-white text-4xl font-bold mb-4">$9.99<span className="text-lg font-normal">/month</span></div>
                <p className="text-blue-100 mb-6">For dedicated goal achievers</p>
                
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-200 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Unlimited goals</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-200 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Advanced AI milestone suggestions</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-200 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Detailed progress analytics</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-200 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Custom notifications</span>
                  </li>
                </ul>
                
                <Link href="/sign-up" className="block w-full py-3 px-6 text-center bg-white hover:bg-blue-50 text-blue-600 font-medium rounded-lg transition">
                  Start Free Trial
                </Link>
              </div>
            </motion.div>
            
            {/* Team Plan */}
            <motion.div
              className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Team</h3>
                <div className="text-blue-600 text-4xl font-bold mb-4">$24.99<span className="text-lg font-normal">/month</span></div>
                <p className="text-gray-600 mb-6">For teams working together</p>
                
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Up to 10 team members</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Team goal collaboration</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Priority support</span>
                  </li>
                </ul>
                
                <Link href="/sign-up" className="block w-full py-3 px-6 text-center bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium rounded-lg transition">
                  Contact Sales
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Achieve Your Goals?
            </motion.h2>
            <motion.p 
              className="text-lg text-blue-100 mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join thousands of users who are exceeding their expectations and reaching their goals faster with Goal Tracker.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                href="/sign-up" 
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition shadow-lg"
              >
                Get Started Free
              </Link>
              <Link 
                href="/demo" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition"
              >
                Watch Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {/* FAQ Items */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-2">How does the AI milestone suggestion work?</h3>
                <p className="text-gray-600">Our AI analyzes your goal details, deadline, and category to suggest relevant milestones tailored to your specific needs. The more information you provide about your goal, the more accurate our suggestions will be.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Can I track both personal and professional goals?</h3>
                <p className="text-gray-600">Absolutely! Goal Tracker is designed to handle any type of goal. You can categorize your goals as personal, professional, health, financial, or create custom categories to organize them your way.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Is my data secure?</h3>
                <p className="text-gray-600">Yes, we take security seriously. All your data is encrypted both in transit and at rest. We never share your personal information or goal data with third parties.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className=""
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Can I cancel my subscription anytime?</h3>
                <p className="text-gray-600">Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. If you cancel, you'll maintain access until the end of your current billing period.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div>
              <Link href="/" className="font-bold text-xl text-white flex items-center mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
                  />
                </svg>
                Goal Tracker
              </Link>
              <p className="text-gray-400 mb-6">
                Achieve your goals faster with AI-powered milestone tracking and intelligent suggestions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v17.056c0 1.368-1.104 2.472-2.46 2.472h-15.080c-1.356 0-2.46-1.104-2.46-2.472v-17.056c0-1.368 1.104-2.472 2.46-2.472h15.080zm-7.54 8.222c-.82 0-1.601.35-2.148.897s-.897 1.33-.897 2.148.35 1.601.897 2.148 1.33.897 2.148.897 1.601-.35 2.148-.897.897-1.33.897-2.148-.35-1.601-.897-2.148-1.33-.897-2.148-.897zm0-4.222c1.88 0 3.64.733 4.95 2.043s2.043 3.073 2.043 4.95-.733 3.64-2.043 4.95-3.073 2.043-4.95 2.043-3.64-.733-4.95-2.043-2.043-3.073-2.043-4.95.733-3.64 2.043-4.95 3.073-2.043 4.95-2.043zm7.54-2h-15.080c-.413 0-.75.337-.75.75v17.5c0 .413.337.75.75.75h15.080c.414 0 .75-.337.75-.75v-17.5c0-.413-.336-.75-.75-.75z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-gray-400 hover:text-white transition">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white transition">Pricing</Link></li>
                <li><Link href="/integrations" className="text-gray-400 hover:text-white transition">Integrations</Link></li>
                <li><Link href="/roadmap" className="text-gray-400 hover:text-white transition">Roadmap</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
                <li><Link href="/guides" className="text-gray-400 hover:text-white transition">Guides</Link></li>
                <li><Link href="/help" className="text-gray-400 hover:text-white transition">Help Center</Link></li>
                <li><Link href="/api" className="text-gray-400 hover:text-white transition">API Documentation</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-white transition">Careers</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Goal Tracker. All rights reserved.
              </p>
              
              <div className="flex space-x-6">
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition">
                  Privacy Policy
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}