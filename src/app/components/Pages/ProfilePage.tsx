import React, { useState } from 'react';

// Define the ProfileProps interface
export interface ProfileProps {
  id: number;
  name: string;
  profileImage: string;  // URL for profile image
  bannerImage: string;   // URL for banner image
  bio: string;
  location: string;
  school: string;
  work: string;
}

export const ProfilePage: React.FC<ProfileProps> = ({
    id,name,profileImage, bannerImage, 
    bio,location,school,work,
}) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
    <div style={{ fontFamily: 'Arial, sans-serif', width: '100%', margin: '0 auto' }}>
      {/* Banner Image */}
      <header
        style={{
          backgroundImage: `url(${bannerImage})`, 
          height: '250px',
          width: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginBottom: '20px',
        }}
      ></header>

      {/* Profile Section */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', marginLeft: '20px' }}>
        {/* Profile Image */}
        <img
          src={profileImage}  
          alt="Profile"
          style={{
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            objectFit: 'cover',
          }}
        />
        {/* Full Name */}
        <div style={{ marginLeft: '20px' }} >
          <h2 style={{ margin: '0' }}>{name}</h2>
          <p style={{ margin: '5px 0', color: 'gray' }}>Location: {location}</p>
        </div>
      </div>

      {/* Description Section */}
      <div style={{ marginLeft: '20px' }}>
        <label style={{ fontWeight: 'bold' }}>Description</label>
        <p>{bio}</p>
        <div style={{marginBottom: "20px" /*empty line*/ }}></div>
        <p><strong>School:</strong></p>
        <p>{school}</p>
        <div style={{marginBottom: "20px" /*empty line*/ }}></div>
        <p><strong>Work:</strong></p>
        <p>{work}</p>
        <div style={{marginBottom: "20px" /*empty line*/ }}></div>
      </div>
     
      <button onClick={() => setIsEditing(!isEditing)} style={{ marginLeft: '20px' }}>Edit Profile</button>
      {isEditing && <div>ERROR:  Editing Feature Not yet available</div>}
    </div>
  );
};

export default ProfilePage;
