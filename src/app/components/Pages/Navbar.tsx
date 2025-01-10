'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Next.js router for navigation
import { FaFacebook, FaUserCircle, FaBell, FaHome, FaUsers } from 'react-icons/fa';
import { MdOutlineVideoLibrary } from 'react-icons/md';

export default function Navbar({
  openHomeModal,
  openCloseFriendsModal,
  openSavedPostsModal,
  openCloseVideosModal,
  openCloseEventsModal,
  openCloseProfileModal,
}: {
  openHomeModal?: () => void;
  openCloseFriendsModal?: () => void;
  openSavedPostsModal?: () => void;
  openCloseVideosModal?: () => void;
  openCloseEventsModal?: () => void;
  openCloseProfileModal?: () => void;
}) {
  const router = useRouter();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const toggleProfileMenu = () => setIsProfileMenuOpen((prev) => !prev);

  const handleLogout = () => {
    console.log('User logged out');
    router.push('/login'); // Redirect to login page
  };

  const handleChangePassword = () => {
    console.log('Navigating to Change Password page');
    router.push('/change-password'); // Redirect to Change Password page
  };

  const [menuPosition, setProfileMenuPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(e.target as Node)) {
        setIsProfileMenuOpen(false);
        const position = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        setProfileMenuPosition({
          x: position.left,
          y: position.bottom,
        });
    }};

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="position: fixed top-0 bg-blue-600 p-2 flex items-center justify-between w-full z-50" >
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <FaFacebook className="text-white text-3xl" />
        <input
          type="text"
          placeholder="Search Facebook"
          className="rounded-full px-4 py-2 text-sm"
        />
      </div>
      {/* Navigation */}
      <div className="flex space-x-8 text-white">
        <FaHome onClick={openHomeModal} className="text-2xl cursor-pointer" />
        <FaUsers onClick={openCloseFriendsModal} className="text-2xl cursor-pointer" />
        <MdOutlineVideoLibrary onClick={openCloseVideosModal} className="text-2xl cursor-pointer" />
      </div>
      {/* User Actions */}
      <div className="flex items-center space-x-4 relative">
        <FaBell onClick={() => console.debug("Feature: notifications not yet implemented")} className="text-2xl text-white cursor-pointer" />
        <FaUserCircle
          onClick={toggleProfileMenu}
          className="text-3xl text-white cursor-pointer"
        />
        {/* Profile Menu */}
        {isProfileMenuOpen && (
          <div
            ref={profileMenuRef}
            className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg z-10"
            style={{
              position: 'absolute',
              top: `${menuPosition.y}px`, 
              right: `${menuPosition.x}px`,
            }}
          >
            <ul> 
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {setIsProfileMenuOpen(false); openCloseProfileModal?.(); } }
              >
                Open Profile
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={handleChangePassword}
              >
                Change Password
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
