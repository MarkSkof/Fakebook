'use client'
import React, { useState, useRef, useEffect } from 'react';
import FileUploadComponent from '../scripts/fileUploadFunctions';
import { UserInfoProps } from './UserInfoTile';

export const ContactUserInfo: React.FC<UserInfoProps> = ({ id, name, imgPath }) => {
  const [isOptionMenuOpen, setIsOptionMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Focus the menu when it opens
  useEffect(() => {
    if (isOptionMenuOpen && menuRef.current) {
      menuRef.current.focus(); // Set focus on the pop-up menu
    }
  }, [isOptionMenuOpen]); // This effect runs when isOptionMenuOpen changes

  const ShowPopUpMenu = (e: React.MouseEvent<HTMLImageElement>) => {
    setIsOptionMenuOpen(!isOptionMenuOpen);

    const position = e.currentTarget.getBoundingClientRect();
    
    // Get the parent offset for both X and Y directions
    const parentOffset = e.currentTarget.offsetParent?.getBoundingClientRect();
    
    setMenuPosition({
      x: position.left - (parentOffset?.left || 0),  // Adjust for parent offset in X
      y: position.bottom - (parentOffset?.top || 0), // Adjust for parent offset in Y
    });
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    // Stop the event propagation to prevent the menu from closing
    e.stopPropagation();
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOptionMenuOpen(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div onClick={ShowPopUpMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: isHovered ? "rgba(35, 35, 36, 0.1)" : "white", transition: "background-color 0.3s ease"}}>
        <img
          src={imgPath}
          style={{ width: '50px', height: '50px', marginRight: '10px', objectFit: 'cover', borderRadius: '50%' }}
        />
        {isOptionMenuOpen && (
          <div
            ref={menuRef} 
            tabIndex={-1} 
            onClick={handleMenuClick} // Stop click event propagation
            style={{
              position: 'absolute',
              top: `${menuPosition.y}px`, 
              left: `${menuPosition.x}px`,
              backgroundColor: 'white',
              border: '1px solid black',
              padding: '10px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              zIndex: 1000, 
            }}
          >
            <ul style={{ height: '200px', overflowY: 'auto' }}>
              <li>
                <input
                  type="text"
                  placeholder="Send message"
                  className="rounded-full px-4 py-2 text-sm"
                  onChange={(e) => console.log('Text edited')}
                  onKeyDown={(e) => console.log('Text sent')}
                  style={{ height: '30px' }}
                />
              </li>
              <li>
                <FileUploadComponent accept="image/png, image/jpeg, image/gif, image/webp" description="Send image" />
              </li>
              <li>
                <FileUploadComponent accept="video/mp4, video/webm, video/avi" description="Send video" />
              </li>
            </ul>
          </div>
        )}
        <span>{name}</span>
      </div>
    </div>
  );
};
