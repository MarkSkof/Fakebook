import React from "react";

export interface UserInfoProps {
  id: number
  name: string;  
  imgPath: string;
}

// String name, String imgPath
export const UserInfo: React.FC<UserInfoProps> = ({ id, name, imgPath }) => {
  function ConfirmFriend(){
    // TODO -> 1) update database
    console.log("Friend offer was confirmed")
  }

  function RejectFriend(){
    // TODO -> 1) update database
    console.log("Friend offer was rejected")
  }

  return (
    <div>
      <div>
        <img
          src={imgPath}
          alt="Image"
          style={{
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <div>{name}</div>
      <div>
        <button 
          style={{
            display: 'flex',
            justifyContent: 'center', // Horizontal alignment
            alignItems: 'center',    // Vertical alignment
            backgroundColor: 'rgb(8, 102, 255)',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          width: '100%'
          }}
          onClick={ConfirmFriend}
        >
          Confirm
        </button>
      </div>
      <button
        style={{
          display: 'flex',
          justifyContent: 'center', // Horizontal alignment
          alignItems: 'center',    // Vertical alignment
          backgroundColor: 'rgb(226, 229, 233)',
          color: 'black',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%'
        }}
        onClick={RejectFriend}
      >
        Reject
      </button>
    </div>
  );
}