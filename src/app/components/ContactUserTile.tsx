import React, { useState, useRef, useEffect } from 'react';
import FileUploadComponent from '../scripts/fileIUpload';
import { UserInfoProps } from './UserInfoTile';

export const ContactUserInfo: React.FC<UserInfoProps> = ({ id, name, imgPath }) => {
  const [isOptionMenuOpen, setIsOptionMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  // Focus the menu when it opens
  useEffect(() => {
    if (isOptionMenuOpen && menuRef.current) {
      menuRef.current.focus(); 
    }
  }, [isOptionMenuOpen]); 

  function ShowPopUpMenu(e: React.MouseEvent<HTMLImageElement>) {
    setIsOptionMenuOpen((prevState) => !prevState);
    const position = (e.target as HTMLImageElement).getBoundingClientRect();
    setMenuPosition({
      x: position.right,
      y: position.bottom,
    });
  }

  // Close the menu if the user clicks outside of it
  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsOptionMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={imgPath}
          style={{ width: '50px', height: '50px', marginRight: '10px', objectFit: 'cover' }}
          onClick={ShowPopUpMenu}
        />
        {isOptionMenuOpen && (
          <div
            ref={menuRef} // Assign the ref to the menu container
            tabIndex={-1} // Ensure the menu is focusable
            style={{
              position: 'absolute',
              top: `${menuPosition.y}px`, 
              left: `${menuPosition.x}px`,
              backgroundColor: 'white',
              border: '1px solid black',
              padding: '10px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              zIndex: 10,
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
