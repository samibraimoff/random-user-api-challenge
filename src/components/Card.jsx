import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import UserProfile from '../pages/UserProfile';

const Card = ({ item }) => {
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    name: { title, first, last },
    picture: { large },
  } = item;

  const loadMore = () => {
    handleShow();
    setData(item);
  };
  return (
    <>
      <div className='card m-2'>
        <img src={large} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{`${title}. ${first} ${last}`}</h5>
        </div>
        <div className='card-body'>
          <Button variant='primary' onClick={loadMore}>
            More info...
          </Button>
        </div>

        <UserProfile
          data={data}
          handleShow={handleShow}
          handleClose={handleClose}
          show={show}
        />
      </div>
    </>
  );
};

export default Card;
