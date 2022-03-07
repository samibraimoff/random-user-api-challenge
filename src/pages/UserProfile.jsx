import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const UserProfile = ({ data, show, handleClose }) => {
  console.log('data', data);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`${data && data.name.title} ${
            data && data.name.first
          } ${data && data.name.last}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Email: {data && data.email}</p>
          <p>Cell: {data && data.cell}</p>
          <p>Age: {data && data.dob.age}</p>
          <p>
            Address:
            {`${data && data.location.street.name} str., ${
              data && data.location.street.number
            }, ${data && data.location.city} city, state of ${
              data && data.location.state
            }, ${data && data.location.country}, zip ${
              data && data.location.postcode
            }`}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default UserProfile;
