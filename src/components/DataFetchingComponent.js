// src/components/DataFetchingComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetchingComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/data-endpoint')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default DataFetchingComponent;
