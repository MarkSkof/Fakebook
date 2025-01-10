import React, { useState } from 'react';
import Post from '../Post';

export default function Feed() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // To track which button was clicked
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([
    { id: 1, content: 'Hello, world!' },
    { id: 2, content: 'Welcome to Fakebook!' },
  ]);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);

  const handleButtonClick = (type: string) => {
    setModalType(type);
    setIsModalOpen(true);

    if (type === 'liveVideo') {
      requestCameraAccess();
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalType('');
    if (cameraStream) {
      cameraStream.getTracks().forEach((track) => track.stop());
      setCameraStream(null);
    }
    setIsCameraOpen(false);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
  };

  const handlePost = () => {
    if (postContent.trim()) {
      setPosts([{ id: Date.now(), content: postContent }, ...posts]);
      setPostContent('');
      setSelectedFiles(null);
      setIsModalOpen(false);
    }
  };

  const requestCameraAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStream(stream);
      setIsCameraOpen(true);
    } catch (err) {
      alert('Camera access denied!');
    }
  };

  return (
    <div className="flex-1 p-4">
      {/* Create Post Section */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <input
          type="text"
          placeholder="What's on your mind?"
          className="w-full p-2 border rounded-lg"
          disabled
        />
        <div className="flex justify-between mt-4">
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-lg"
            onClick={() => handleButtonClick('liveVideo')}
          >
            Live Video
          </button>
          <button
            className="bg-green-600 text-white py-2 px-4 rounded-lg"
            onClick={() => handleButtonClick('photoVideo')}
          >
            Photo/Video
          </button>
          <button
            className="bg-yellow-600 text-white py-2 px-4 rounded-lg"
            onClick={() => handleButtonClick('feelingActivity')}
          >
            Feeling/Activity
          </button>
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <Post key={post.id} content={post.content} />
      ))}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {modalType === 'liveVideo' && 'Go Live'}
                {modalType === 'photoVideo' && 'Create Photo/Video Post'}
                {modalType === 'feelingActivity' && 'Share Feeling/Activity'}
              </h2>
              <button
                onClick={handleModalClose}
                className="text-gray-500 hover:text-gray-800"
              >
                ✖
              </button>
            </div>

            {/* Modal Content */}
            {modalType === 'photoVideo' && (
              <div>
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  onChange={handleFileSelect}
                  className="mb-4"
                />
                {selectedFiles && (
                  <ul>
                    {[...selectedFiles].map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {modalType === 'liveVideo' && isCameraOpen && (
              <div className="video-container">
                <video
                  autoPlay
                  muted
                  playsInline
                  ref={(video) => {
                    if (video && cameraStream) video.srcObject = cameraStream;
                  }}
                  className="w-full h-64 bg-black"
                />
              </div>
            )}

            {modalType === 'feelingActivity' && (
              <textarea
                className="w-full p-3 border rounded-lg mb-4"
                placeholder="What's on your mind?"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              />
            )}

            {/* Modal Actions */}
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg"
                onClick={handleModalClose}
              >
                Cancel
              </button>
              {modalType !== 'liveVideo' && (
                <button
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg"
                  onClick={handlePost}
                >
                  Post
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
