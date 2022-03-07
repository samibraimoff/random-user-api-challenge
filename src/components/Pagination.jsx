import React from 'react';

import { useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/user.actions';

const Pagination = () => {
  const dispatch = useDispatch();
  const nextPage = (pageId) => {
    dispatch(getUsers(pageId));
  };

  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        {pages.map((page) => (
          <li className='page-item' key={page} onClick={() => nextPage(page)}>
            <a className='page-link' href='#'>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
