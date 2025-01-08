'use client'
import React, { useState } from 'react';
import { format } from 'date-fns';

import { getAcceptType_ViaString, renderFilePreview_ViaString } from "../scripts/fileUploadFunctions";
import { GrLike, GrDislike } from "react-icons/gr";
import { TfiCommentAlt } from "react-icons/tfi";
import { UploadMenu } from './UploadMenu';
import { MdBookmarkAdd, MdBookmarkAdded } from 'react-icons/md';

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

    function Like(){
         // TODO -> fetch from database
        setIsLiked(!isLiked)
        if(isDisliked) setIsDisliked(false) // if disliked prior, change dislike state
        console.log(isLiked? "liked" : "unliked");
    }   
      
    function Dislike(){
         // TODO -> fetch from database
         if(isLiked) setIsLiked(false) // if liked prior, change like state
        setIsDisliked(!isDisliked) 
        console.log(isDisliked? "disliked" : "undisliked");
    }

    function SavePost(){
         // TODO -> fetch from database
        setIsSaved(!isSaved) 
        console.log("is saved:" + isSaved);
   }

    function Upload(){
        // TODO
   }

    return (
        <div style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>      
            <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
                
                {/* Image Section */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <img
                        src={imgPath}
                        alt="Image"
                        style={{
                            marginRight: '10px',
                            width: '50px', 
                            height: '50px', 
                            objectFit: 'cover'
                        }}
                    />
                    <div>
                        <span style={{ display: 'block', fontWeight: 'bold' }}>{name}</span>
                        <span style={{ display: 'block', fontSize: '0.9rem', color: '#888' }}>{formattedPostDate}</span>
                        {isSaved? <MdBookmarkAdded className='w-8 h-8' onClick={SavePost}/>:<MdBookmarkAdd className='w-8 h-8' onClick={SavePost}/>} 
                    </div>               
                </div>

                {/* Title Section */}
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>
                    {title}
                </div>

                {/* File Preview Section */}
                <div style={{ marginBottom: '10px' }}>
                    {renderFilePreview_ViaString(fileUrl, fileType)}
                </div>

                {/* Like Button & Comments Section */}
                <div style={{ marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <GrLike onClick={Like} style={{ color: isLiked? "green" : "black", cursor: 'pointer', marginLeft: '5px' }} />
                        <span>{ " " + likeCount}|</span>
                        <GrDislike onClick={Dislike} style={{ color: isDisliked? "red" : "black",  cursor: 'pointer', marginLeft: '5px' }} />
                        <span> {" " + dislikeCount}</span>
                        <TfiCommentAlt onClick={() => setIsCommentsMenuOpen(!isCommentsMenuOpen)} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                    </div>

                    {/* Comments Section */}
                    {isCommentsMenuOpen && (
                        <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #ddd', overflowY: 'auto' }}>
                            {comments.map((comment, index) => (
                                <div key={index} style={{ marginBottom: '5px', fontSize: '0.9rem', color: '#333' }}>
                                    {comment}
                                </div>
                            ))}
                            <UploadMenu
                            uploadFunction={Upload}
                            accept={getAcceptType_ViaString(fileType)}
                            />                       
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}