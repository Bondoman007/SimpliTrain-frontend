import React, { useState } from "react";
import {
  Search,
  Home,
  Grid,
  MessageSquare,
  Users,
  Bell,
  User,
  Menu,
} from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const emailInfo = useSelector((store) => store.loginInfo.email);

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-sm">
      {/* Logo */}
      <div className="font-bold text-xl text-gray-800">SimpliTrain</div>

      {/* Search Bar */}

      <div className="relative max-w-md w-full mx-4">
        <div className="relative flex items-center bg-gray-100 rounded-full px-3 py-2">
          <Search className="h-4 w-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="What would you like to learn?"
            className="bg-transparent border-none outline-none w-full text-sm text-gray-700 placeholder-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Navigation Icons */}
      <div className="flex items-center space-x-6">
        <div className="flex flex-col items-center">
          <Home className="h-5 w-5 text-gray-500" />
          <span className="text-xs text-gray-500 mt-1">Home</span>
        </div>

        <div className="flex flex-col items-center">
          <Grid className="h-5 w-5 text-gray-500" />
          <span className="text-xs text-gray-500 mt-1">Categories</span>
        </div>

        <div className="flex flex-col items-center">
          <MessageSquare className="h-5 w-5 text-gray-500" />
          <span className="text-xs text-gray-500 mt-1">Chat</span>
        </div>

        <div className="flex flex-col items-center">
          <Users className="h-5 w-5 text-gray-500" />
          <span className="text-xs text-gray-500 mt-1">Forum</span>
        </div>

        <div className="flex flex-col items-center">
          <Bell className="h-5 w-5 text-gray-500" />
          <span className="text-xs text-gray-500 mt-1">Notification</span>
        </div>

        {/* User Avatar */}
        <div className="ml-2">
          <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Menu Icon */}
        <Menu className="h-5 w-5 text-gray-500" />
      </div>
    </nav>
  );
};

export default Navbar;
