'use client'
import Navbar from '../app/components/Navbar';
import Sidebar from '../app/components/Sidebar';
import Feed from '../app/components/Feed';
import Widgets from '../app/components/Widgets';
import Friends from '../app/components/Friends';
import VideosPage from '../app/components/Videos';
import SavedPostsPage from '../app/components/SavedPost';
import EventsPage from '../app/components/EventsPost';

import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFriendsModalOpen, setIsFriendsModalOpen] = useState(false);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);
  const [isVideosModalOpen, setIsVideosModalOpen] = useState(false);
  const [isEventsModalOpen, setIsEventsModalOpen] = useState(false);

  useEffect(() => {
    if (isFriendsModalOpen || isSavedModalOpen || isVideosModalOpen || isEventsModalOpen) {
      setIsModalOpen(true);  // If any modal is open, set isModalOpen to true
    } else {
      setIsModalOpen(false); // If all modals are closed, set isModalOpen to false
    }
  }, [isFriendsModalOpen, isSavedModalOpen, isVideosModalOpen, isEventsModalOpen]);

  const openFriendsModal = () => {
    setIsFriendsModalOpen(!isFriendsModalOpen);
    setIsSavedModalOpen(false);
    setIsVideosModalOpen(false);
    setIsEventsModalOpen(false);
  };

  const openSavedModal = () => {
    setIsFriendsModalOpen(false);
    setIsSavedModalOpen(!isSavedModalOpen);
    setIsVideosModalOpen(false);
    setIsEventsModalOpen(false);
  };

  const openVideosModal = () => {
    setIsFriendsModalOpen(false);
    setIsSavedModalOpen(false);
    setIsVideosModalOpen(!isVideosModalOpen);
    setIsEventsModalOpen(false);
  };

  const openEventsModal = () => {
    setIsFriendsModalOpen(false);
    setIsSavedModalOpen(false);
    setIsVideosModalOpen(false);
    setIsEventsModalOpen(!isEventsModalOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
      <Sidebar 
      openCloseFriendsModal={openFriendsModal} 
      openSavedPostsModal={openSavedModal} 
      openCloseVideosModal={openVideosModal} 
      openCloseEventsModal={openEventsModal} 
      />
        {!isModalOpen ? (<Feed />) : (
          <>
          {isFriendsModalOpen && <Friends />}
          {isSavedModalOpen && <SavedPostsPage />}
          {isVideosModalOpen && <VideosPage />}
          {isEventsModalOpen && <EventsPage />}
          </>
        )}
        <Widgets />
      </div>
    </div>
  );
}

//        <Sidebar openCloseFriendsModal={() => setIsFriendsModalOpen(!isFriendsModalOpen)} />

/*
{!isModalOpen? <Feed /> :  <Friends />}
{!isFriendsModalOpen? <Feed /> :  <Friends />}
{!isSavedModalOpen? <Feed /> :  <SavedPostsPage />}
{!isVideosModalOpen? <Feed /> :  <VideosPage />}
        */