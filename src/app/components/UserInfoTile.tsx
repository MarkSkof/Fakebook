import React from "react";

export interface UserInfoProps {
  id: number;
  name: string;
  imgPath: string;
}

// String name, String imgPath
export const UserInfo: React.FC<UserInfoProps> = ({ id, name, imgPath }) => {
  function ConfirmFriend() {
    // TODO -> 1) update database
    console.log("Friend offer was confirmed");
  }

  function RejectFriend() {
    // TODO -> 1) update database
    console.log("Friend offer was rejected");
  }

  return (
    <div
      style={{
        border: "1px solid #ddd", // Border for user profile card
        borderRadius: "10px", // Rounded corners for the card
        padding: "15px", // Space inside the card
        width: "100%", // Full width of the container
        boxSizing: "border-box", // Include padding in width calculation
        textAlign: "center", // Center the text
        marginBottom: "15px", // Space between profile cards
      }}
    >
      <div>
        <img
          src={imgPath}
          alt="Profile"
          style={{
            width: "120px", // Image width
            height: "120px", // Image height equal to width for a square image
            objectFit: "cover", // Crop and cover the area of the circle
            borderRadius: "5px", // Crop and cover the area of the circle
            margin: "0 auto", // Center the image
            display: "block", // Block display to avoid inline space issues
          }}
        />
      </div>
      <div style={{ marginTop: "10px", fontSize: "16px", fontWeight: "bold" }}>
        {name}
      </div>
      <div style={{ marginTop: "10px" }}>
        <button
          style={{
            width: "100%", // Make button take full width
            backgroundColor: "rgb(8, 102, 255)",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "10px", // Space between buttons
            fontSize: "16px", // Text size for the button
          }}
          onClick={ConfirmFriend}
        >
          Confirm
        </button>
      </div>
      <button
        style={{
          width: "100%", // Make button take full width
          backgroundColor: "rgb(226, 229, 233)",
          color: "black",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px", // Text size for the button
        }}
        onClick={RejectFriend}
      >
        Reject
      </button>
    </div>
  );
};
