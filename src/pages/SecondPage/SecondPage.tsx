import axios from 'axios';

import { useEffect, useState } from 'react';

const SecondPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      console.log(res.data);
    });
  }, []);

  return <div></div>;
};

export default SecondPage;
