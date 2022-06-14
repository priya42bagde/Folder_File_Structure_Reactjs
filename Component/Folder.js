import React, { useState } from 'react';

export default function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  console.log(explorer);
  if (explorer.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)}>
          {explorer.name} <br />
        </span>
        <div
          style={{ display: expand ? 'block' : 'none', paddingLeft: '15px' }}
        >
          {explorer.items.map((exp) => {
            return <Folder key={exp.name} explorer={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span>
        {explorer.name}
        <br />
      </span>
    );
  }
}
