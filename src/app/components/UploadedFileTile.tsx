'use client'
import React, { useState } from 'react';
import { format } from 'date-fns';

import { renderFilePreview_ViaString } from "../scripts/fileIUpload";
import { GrLike } from "react-icons/gr";
import { TfiCommentAlt } from "react-icons/tfi";

interface UploadedFileProps {
    id: number
    name: string; 
    imgPath: string
    title: string
    fileUrl: string
    fileType: string
    postDate: Date
    likeCount: number
    comments: string[]
}

export const UploadedFilePost: React.FC<UploadedFileProps> = ({ id, name, imgPath, title, fileUrl, fileType, postDate, likeCount, comments }) => {
    const [isCommentsMenuOpen, setIsCommentsMenuOpen] = useState<boolean>(false);
    const formattedPostDate = format(postDate, 'yyyy-MM-dd'); 
    return <div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ul>
        <li>
          <img
          src={imgPath}
          style={{ width: '50px', height: '50px', marginRight: '10px', objectFit: 'cover' }}
          />     
          <span>{name}</span>
        </li>
        <li>
          <div>{title}</div>
          <span>{formattedPostDate}</span>
        </li>
        <li>
          <span>{formattedPostDate}</span>
        </li>
        <li>
           {renderFilePreview_ViaString(fileUrl, fileType)}
        </li>
        <li>
          <div>{likeCount}<GrLike onClick={()=>likeCount++}/></div>
          {!isCommentsMenuOpen && <TfiCommentAlt onClick={() => setIsCommentsMenuOpen(!isCommentsMenuOpen)}/>}
          {isCommentsMenuOpen && <button onClick={() => setIsCommentsMenuOpen(!isCommentsMenuOpen)}>Close</button>}
        </li>
        <li>
          {<div>isCommentsMenuOpen && <button onClick={() => setIsCommentsMenuOpen(!isCommentsMenuOpen)}/>Close</div>}
          <div>{comments}</div>
        </li>
      </ul>
    </div>
  </div>
}