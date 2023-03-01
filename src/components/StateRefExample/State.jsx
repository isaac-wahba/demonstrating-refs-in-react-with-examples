import { useState, useEffect } from 'react';
export default function State() {
  const [rerenderCount, setRerenderCount] = useState(0);

  useEffect(() => {
    setRerenderCount((prevCount) => prevCount + 1);
  });

  return <div>{rerenderCount}</div>;
}
