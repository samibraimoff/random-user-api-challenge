import React, { useEffect } from 'react';
import { getUsers } from '../redux/actions/user.actions';
import { useDispatch } from 'react-redux';
import Dashboard from './Dashboard';
import Pagination from '../components/Pagination';

const Landing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <>
      <h2 className='m-4 text-center'>Random users API dashboard</h2>
      <Dashboard />
      <Pagination />
    </>
  );
};

export default Landing;
