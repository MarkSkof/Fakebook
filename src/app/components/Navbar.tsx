'use client'
import { FaFacebook, FaUserCircle, FaBell, FaHome, FaUsers } from 'react-icons/fa';
import { MdOutlineVideoLibrary, MdOutlineShoppingCart } from 'react-icons/md';
import {searchUsers_OnInputChange, searchUsers_OnKeyDown} from '../scripts/searchUsers';

export default function Navbar() {
  return (
    <div className="bg-blue-600 p-2 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <FaFacebook className="text-white text-3xl" />
        <input 
          type="text"
          placeholder="Search Facebook"
          className="rounded-full px-4 py-2 text-sm"
          //onChange={e => console.log("kk")}
          onChange={searchUsers_OnInputChange}
          onKeyDown={searchUsers_OnKeyDown} 
        />
      </div>
      {/* Navigation */}
      <div className="flex space-x-8 text-white">
        <FaHome className="text-2xl cursor-pointer" />
        <FaUsers className="text-2xl cursor-pointer" />
        <MdOutlineVideoLibrary className="text-2xl cursor-pointer" />
        <MdOutlineShoppingCart className="text-2xl cursor-pointer" />
      </div>
      {/* User Actions */}
      <div className="flex items-center space-x-4">
        <FaBell className="text-2xl text-white cursor-pointer" />
        <FaUserCircle className="text-3xl text-white cursor-pointer" />
      </div>
    </div>
  );
}
