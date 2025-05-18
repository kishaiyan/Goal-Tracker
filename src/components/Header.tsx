'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useClerk } from '@clerk/nextjs';
import {motion} from 'framer-motion';
import Link from 'next/link';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { IoIosLogOut } from "react-icons/io";
import { CgDarkMode } from "react-icons/cg";
import { FaUser } from "react-icons/fa6";

export default function Header() {
  const { user, signOut } = useClerk();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navLinks = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/goals/create', label: 'Create Goal' },
    { href: '/profile', label: 'Profile' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/login';
  };
 
  const handleThemeToggle = () => {
    document.documentElement.classList.toggle('dark');
    setIsUserMenuOpen(false);
  };

  return (
    <header className="bg-white dark:bg-black shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/dashboard" className="text-2xl font-bold text-blue-600">
              Goal Tracker
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-600 hover:text-blue-600 transition-colors ${
                  pathname === link.href ? 'text-blue-600 font-semibold' : ''
                }`}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* User Menu (Desktop) */}
          <div className="hidden md:flex items-center relative">
            <button
              onClick={toggleUserMenu}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
              aria-label="User menu"
            >
              {user?.imageUrl ? (
                <img
                  src={user.imageUrl}
                  alt="User avatar"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <FaUserCircle className="w-8 h-8" />
              )}
              <span className="text-sm font-medium">
                {user?.firstName || 'User'}
              </span>
            </button>
            {isUserMenuOpen && (
                      <motion.div
                        className="absolute right-0 top-12 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href="/profile"
                          className="flex items-center px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <FaUser className="w-5 h-5 mr-3 text-gray-500" />
                          <span className="text-sm font-medium">Profile</span>
                        </Link>
                        <button
                          onClick={handleThemeToggle}
                          className="flex items-center w-full px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
                        >
                          <CgDarkMode className="w-5 h-5 mr-3 text-gray-500" />
                          <span className="text-sm font-medium">Toggle Theme</span>
                        </button>
                        <button
                          onClick={handleSignOut}
                          className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-red-50 hover:text-red-700 transition"
                        >
                          <IoIosLogOut className="w-5 h-5 mr-3 text-red-500" />
                          <span className="text-sm font-medium">Sign Out</span>
                        </button>
                      </motion.div>
                    )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              className="text-gray-600 hover:text-blue-600"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white border-t py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 ${
                  pathname === link.href ? 'text-blue-600 font-semibold' : ''
                }`}
                onClick={toggleMobileMenu}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-2 flex items-center space-x-2 border-t">
              {user?.imageUrl ? (
                <img
                  src={user.imageUrl}
                  alt="User avatar"
                  className="w-6 h-6 rounded-full"
                />
              ) : (
                <FaUserCircle className="w-6 h-6" />
              )}
              <span className="text-gray-600">
                {user?.firstName || 'User'}
              </span>
            </div>
            <button
              onClick={handleSignOut}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
            >
              Sign Out
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}