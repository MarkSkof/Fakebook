import Post from './Post';

export default function Feed() {
  const posts = [
    { id: 1, content: 'Hello, world!' },
    { id: 2, content: 'Welcome to Fakebook!' },
  ];

  return (
    <div className="flex-1 p-4">
      {/* Create Post Section */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <input
          type="text"
          placeholder="What's on your mind?"
          className="w-full p-2 border rounded-lg"
        />
        <div className="flex justify-between mt-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">Live Video</button>
          <button className="bg-green-600 text-white py-2 px-4 rounded-lg">Photo/Video</button>
          <button className="bg-yellow-600 text-white py-2 px-4 rounded-lg">Feeling/Activity</button>
       
        </div>
      </div>
      {/* Posts */}
      {posts.map((post) => (
        <Post key={post.id} content={post.content} />
      ))}
    </div>
  );
}
