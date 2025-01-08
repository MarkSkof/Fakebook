import React, { useEffect, useRef, useState } from 'react';

interface FileUploadProps {
  accept: string;
  description: string;
}

export const getAcceptType_ViaString = (mediaType: string) => {
  if (mediaType === 'image') {
    return "image/png, image/jpeg, image/gif, image/webp";
  }

  if (mediaType === 'video') {
    return "video/mp4, video/webm, video/avi";
  }

  // Return an empty string for unsupported file types
  console.warn(`Unsupported media type: ${mediaType}`);
  return "";
};

export const renderFilePreview_ViaString = (fileUrl: string, mediaType: string) => {

  if (mediaType === 'image') {
    return <img src={fileUrl} alt="file preview" style={{ width: '100%', height: 'auto' }} />;
  }

  if (mediaType === 'video') {
    return <video controls src={fileUrl} style={{ width: '100%' }} />;
  }

  return <p>Unsupported file type</p>; // For unsupported file types
};

export const renderFilePreview = (file: File | null) => {
  if (!file) return null;

  const fileType = file.type.split('/')[0]; // Get the type (image, video, etc.)

  // Create an object URL for file preview
  const fileUrl = URL.createObjectURL(file);

  useEffect(() => {
    // Cleanup object URL after component unmounts to avoid memory leaks
    return () => {
      URL.revokeObjectURL(fileUrl);
    };
  }, [fileUrl]);

  if (fileType === 'image') {
    return <img src={fileUrl} alt="file preview" style={{ width: '100%', height: 'auto' }} />;
  }

  if (fileType === 'video') {
    return <video controls src={fileUrl} style={{ width: '100%' }} />;
  }

  return <p>Unsupported file type</p>; // For unsupported file types
};

const FileUploadComponent: React.FC<FileUploadProps> = ({ accept, description }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const openFileExplorer = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setIsMenuOpen(true); // Open the menu when a file is selected
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <div>
      <button onClick={openFileExplorer}>{description}</button>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      {/* Show file preview in the menu */}
      {isMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '50px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'white',
            border: '1px solid black',
            padding: '15px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 10,
            width: '300px',
          }}
        >
          <h3>Selected File Preview</h3>
          {renderFilePreview(file)}
          <button onClick={closeMenu}>Close Menu</button>
          <button onClick={closeMenu}>Confirm Menu</button>
        </div>
      )}
    </div>
  );
};

export default FileUploadComponent;
