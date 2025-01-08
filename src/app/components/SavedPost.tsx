import { useState } from "react";
import SearchBar from "./SearchBar";
import { UploadedFilePost } from "./UploadedPost";

export default function SavedPostsPage() {
    const userCount = 10;  // Number of user profiles
    const ids = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    ];
    const names = [
      "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah",
      "Ivy", "Jack", 
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
    ];
    const imgTypes = [
        "image", "image","image","image","image","image", "image","image","image","image"
      ];

    const titles = [
        "title1" , "title2" , "title3" ,"title4" ,"title5" ,"title6" ,"title7" ,"title8" ,"title9" , "title10"
    ];

    const likes = [
        0, 5, 10, 200, 1, 0, 0, 0, 0, 20
    ];

    const postDates = [
        new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()
    ];

    const uploadedFilePostList  = [...Array(userCount)].map((_, index) => (
        <UploadedFilePost 
          key={index} 
          id = {ids[index % names.length]} 
          name={names[index % names.length]} 
          imgPath={imgPaths[index % names.length]} 
          title={titles[index % names.length]} 
          fileUrl={imgPaths[index % imgPaths.length]}  
          fileType={imgTypes[index % imgPaths.length]}  
          postDate={postDates[index % names.length]} 
          likeCount={likes[index % names.length]} 
          dislikeCount={likes[index % names.length]} 
          comments={[]}        
        />
      ));

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-gray-100 p-4 w-1/4 h-screen">
      <div>
        <h3 className="font-bold mb-4">Saved Posts</h3>
      </div>
      <div>
      <SearchBar
        placeHolder="Search..."
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      <div>
        { /*FOR TESTING*/<p>Search Query: {searchQuery}</p> }
      </div>
    </div>
      <div className="bg-white p-4 rounded-lg shadow mb-4"> 
        <div className='posts' style={{maxWidth:"1050px"}}>{uploadedFilePostList}
        </div>
      </div>   
      <style> {`.posts {
        display: flex;
        flex-wrap: wrap;  
        gap: 10px;`}
      </style>
    </div>      
  );
}