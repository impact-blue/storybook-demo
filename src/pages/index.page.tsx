import { Button } from '../components/Button';
import { NextPage } from 'next';
import { useState } from 'react';

const Index: NextPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center space-x-3">
      <Button onClick={() => setCount(oldCount => oldCount + 1)}>+1</Button>
      <p>{count}</p>
    </div>
  );
};

export default Index;
