import React, { useState } from 'react';

const Camp: React.FC = () => {
  const [camp, setCamp] = useState<string>('');

  return (
    <>
      <div className="container">
        <h1>캠프</h1>
        <div className="form-group">
          <label htmlFor="camp">캠프</label>
          <input
            type="text"
            id="camp"
            className="form-control"
            value={camp}
            onChange={(e) => setCamp(e.target.value)}
          />
        </div>
        <p>{camp}</p>
      </div>
    </>
  );
};

export default Camp;
