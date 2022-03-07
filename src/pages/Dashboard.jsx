import React from 'react';

import { useSelector } from 'react-redux';
import Card from '../components/Card';

const Dashboard = () => {
  const { list, loading, error } = useSelector((state) => state.users);

  return (
    <div className='d-flex justify-content-center align-items-center'>
      {loading && <p>Loading...</p>}

      {error && <p>Something went wrong, please try again later.</p>}

      <div className='row row-cols-5 mt-3'>
        {list.length > 0 &&
          list.map((item) => <Card item={item} key={item.login.uuid} />)}
      </div>
    </div>
  );
};

export default Dashboard;
