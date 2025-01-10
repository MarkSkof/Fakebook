'use client'
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

import { getAcceptType_ViaString, renderFilePreview_ViaString } from "../scripts/fileUploadFunctions";
import { GrLike, GrDislike } from "react-icons/gr";
import { TfiCommentAlt } from "react-icons/tfi";
import { MdBookmarkAdd, MdBookmarkAdded } from 'react-icons/md';
import axios from 'axios';

interface UploadedFileProps {
    id: number
    name: string; 
    imgPath: string
    title: string
    fileUrl: string
    fileType: string
    postDate: Date
    likeCount: number
    dislikeCount: number
    comments: string[]
}

export const UploadedFilePost: React.FC<UploadedFileProps> = ({ id, name, imgPath, title, fileUrl, fileType, postDate, likeCount, dislikeCount, comments }) => {
    const [isCommentsMenuOpen, setIsCommentsMenuOpen] = useState<boolean>(false);
    const formattedPostDate = format(postDate, 'yyyy-MM-dd'); 

    const [isLiked, setIsLiked] = useState(false); // TODO -> fetch from database
    const [isDisliked, setIsDisliked] = useState(false); // TODO -> fetch from database
    const [isSaved, setIsSaved] = useState(false); // TODO -> fetch from database

    function Like() {
        setIsLiked(!isLiked);
        if (isDisliked) setIsDisliked(false); // if disliked prior, change dislike state
    }   
      
    function Dislike() {
        if (isLiked) setIsLiked(false); // if liked prior, change like state
        setIsDisliked(!isDisliked);
    }

    function SavePost() {
        setIsSaved(!isSaved);
    }

    return (
        <div style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9', marginBottom: '10px' }}>      
            <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* User Info */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={imgPath}
                        alt="User Image"
                        style={{
                            marginRight: '10px',
                            width: '50px', 
                            height: '50px', 
                            objectFit: 'cover',
                            borderRadius: '50%'   
                        }}
                    />
                    <div>
                        <span style={{ display: 'block', fontWeight: 'bold' }}>{name}</span>
                        <span style={{ display: 'block', fontSize: '0.9rem', color: '#888' }}>{formattedPostDate}</span>
                    </div>
                </div>
                {/* Bookmark Icon */}
                <div>
                    {isSaved ? 
                        <MdBookmarkAdded className="w-6 h-6 cursor-pointer" onClick={SavePost} /> : 
                        <MdBookmarkAdd className="w-6 h-6 cursor-pointer" onClick={SavePost} />}
                </div>
            </div>

            {/* Title */}
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>
                {title}
            </div>

            {/* File Preview */}
            <div style={{ marginBottom: '10px' }}>
                {renderFilePreview_ViaString(fileUrl, fileType)}
            </div>

            {/* Like, Dislike, Comment */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <GrLike 
                    onClick={Like} 
                    style={{ color: isLiked ? "green" : "black", cursor: 'pointer', marginLeft: '5px' }} 
                />
                <span style={{ marginLeft: '5px' }}>{likeCount}</span>
                <GrDislike 
                    onClick={Dislike} 
                    style={{ color: isDisliked ? "red" : "black", cursor: 'pointer', marginLeft: '10px' }} 
                />
                <span style={{ marginLeft: '5px' }}>{dislikeCount}</span>
                <TfiCommentAlt 
                    onClick={() => setIsCommentsMenuOpen(!isCommentsMenuOpen)} 
                    style={{ cursor: 'pointer', marginLeft: '10px' }} 
                />
            </div>

            {/* Comments Section */}
            {isCommentsMenuOpen && (
                <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #ddd' }}>
                    {comments.map((comment, index) => (
                        <div key={index} style={{ marginBottom: '5px', fontSize: '0.9rem', color: '#333' }}>
                            {comment}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
