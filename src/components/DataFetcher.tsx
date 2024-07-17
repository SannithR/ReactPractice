// src/components/DataFetcher.tsx
import React, { useEffect, useState } from 'react';

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DataFetcher;
