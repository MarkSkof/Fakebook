'use client';
import { FaUsers, FaBookmark, FaClock, FaVideo, FaCalendar, FaChartBar } from 'react-icons/fa';

export default function Sidebar(
  { openCloseFriendsModal: openCloseFriendsModal, openSavedPostsModal, openCloseVideosModal, openCloseEventsModal }
  : { openCloseFriendsModal?: () => void, openSavedPostsModal?: () => void, openCloseVideosModal?: () => void, openCloseEventsModal?: () => void },
  
) {
  return (
    <div className="bg-gray-100 p-4 w-1/4 h-screen" >
      <ul>
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer" onClick={openCloseFriendsModal}>
          <FaUsers className="text-blue-600" />
          <span>Friends</span>
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer" onClick={openSavedPostsModal}>
          <FaBookmark className="text-blue-600" />
          <span>Saved</span>
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer" onClick={openCloseVideosModal}>
          <FaVideo className="text-blue-600" />
          <span>Videos</span>
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer" onClick={openCloseEventsModal}>
          <FaCalendar className="text-blue-600" />
          <span>Events</span>
        </li>
      </ul>
    </div>
  );
}
