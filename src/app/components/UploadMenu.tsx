'use client'
import { useState } from 'react';
import FileUploadComponent from '../scripts/fileUploadFunctions';

interface UploadMenuProps {
  uploadFunction: (/*message: string*/) => void;
  accept: string; 
}

export function UploadMenu({ uploadFunction, accept }: UploadMenuProps){
  const [message, setMessage] = useState(''); // either url or text message

  return <div>
    <ul style={{ width: '100%', height: '100px', overflowY: 'auto' }}>
      <li>
        <input
          type="text"
          placeholder="Send message"
          className="block w-full"
          onChange={(e) => console.log('Text edited')}
          onKeyDown={(e) => console.log('Text sent')}
          style={{ 
            flex: 1,
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            padding: '10px',
            borderRadius: '20px',
            backgroundColor: '#fff',
            marginRight: '10px',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.05)',
            overflowY : 'auto'
          }}
        />
      </li>
      <li>
        <FileUploadComponent accept={accept} description="Attach file" />
      </li>
      <li>
        <button onClick={() => {}/*uploadFunction*/}>Send</button>
      </li>
    </ul>
  </div>
}