import { FaUsers, FaBookmark, FaClock, FaVideo, FaCalendar, FaChartBar } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="bg-gray-100 p-4 w-1/4 h-screen">
      <ul>
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer">
          <FaUsers className="text-blue-600" />
          <span>Friends</span>
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer">
          <FaClock className="text-blue-600" />
          <span>Memories</span>
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer">
          <FaBookmark className="text-blue-600" />
          <span>Saved</span>
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer">
          <FaVideo className="text-blue-600" />
          <span>Videos</span>
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer">
          <FaCalendar className="text-blue-600" />
          <span>Events</span>
        </li>
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer">
          <FaChartBar className="text-blue-600" />
          <span>Ads Manager</span>
        </li>
        <li className="text-blue-600 p-2 hover:bg-gray-200 cursor-pointer">See More</li>
      </ul>
    </div>
  );
}
