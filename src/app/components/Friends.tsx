'use client'
import { UserInfo } from '../components/UserInfoTile';

import React from 'react';

        
        

export default function Friends() {
  const userCount = 20;  // Number of user profiles
  const names = [
    "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah",
    "Ivy", "Jack", "Karen", "Leo", "Mona", "Nina", "Oscar", "Paul", "Quincy",
    "Rita", "Sam", "Tina"
  ];
  
  // Example image paths for users (in a real-world scenario, you would replace these with actual image URLs)
  const imgPaths = [
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
    "https://scontent.fmbx3-1.fna.fbcdn.net/v/t39.30808-1/469042148_8829364410452215_816356852482032512_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UsaU2zd9rYwQ7kNvgFjl-rq&_nc_zt=24&_nc_ht=scontent.fmbx3-1.fna&_nc_gid=AttwA-atdH_isC_7eqcFgMD&oh=00_AYBxoOsvMvQ_ZCYxNbftZzizYn_pb_RxPq-Jc1ElthCDEA&oe=677DFF9E", 
  ];
  
  // Generate an array of UserInfo components dynamically
  const userInfoList = [...Array(userCount)].map((_, index) => (
    <UserInfo 
      key={index} 
      name={names[index % names.length]} 
      imgPath={imgPaths[index % imgPaths.length]}  // Cycle through the imgPaths array if needed
    />
  ));

  return (
    <div className="zz">
      {/* Create Post Section */}
      <div className="bg-white p-4 rounded-lg shadow mb-4"> 
        <div>
          <text>Prošnje za prijateljstvo</text>
        </div>
        <div style={{ maxWidth: "1050px" }} className='users'>{userInfoList}</div>
        <style>{
        `.users {
        display: flex;
        flex-wrap: wrap;  
        gap: 10px;`
        }</style>
      </div>
    </div>
  );
}