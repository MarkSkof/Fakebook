'use client'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';
import Friends from '../components/Friends';
import Z from '../components/x';

import React, { useState } from 'react';

export default function HomePage() {
  const [isFriendsModalOpen, setIsFriendsModalOpen] = useState(false);
  const [isSavedModalOpen, setisSavedModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar openCloseFriendsModal={setIsFriendsModalOpen(!isFriendsModalOpen)} />
        <Widgets />
      </div>
    </div>
  );
}
/*
        {/*!isModalOpen? <Feed /> :  <Friends />}*/