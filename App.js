import explorer from './Data/data';
import Folder from './Component/Folder';
import React from 'react';

export default function App() {
  return (
    <div>
      <Folder explorer={explorer} />
    </div>
  );
}
