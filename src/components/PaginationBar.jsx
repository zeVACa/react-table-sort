import React, { useState } from 'react';

export const PaginationBar = ({ usersAmount, setCurrentPageNumber, currentPageNumber }) => {
  const toPrevPage = () => {
    setCurrentPageNumber((prevPage) => prevPage - 1);
  };

  const toNextPage = () => {
    setCurrentPageNumber((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <ul className="pagination-bar">
        <li>
          <button
            value={19}
            onClick={(event) => {
              console.log(event.target.value);
            }}>
            {'<-'}
          </button>
        </li>
        <li>
          <button
            value={1}
            onClick={(event) => {
              console.log(event.target.value);
            }}>
            1
          </button>
        </li>
        {/* {currentPageNumber >= 4
          ? [<li>{currentPageNumber - 2}</li>, <li>{currentPageNumber - 1}</li>]
          : null} */}

        <li>
          <button disabled>{currentPageNumber}</button>
        </li>
        <li>{currentPageNumber + 1}</li>
        <li>{currentPageNumber + 2}</li>
        <li>...</li>
        <li>
          <button
            value={Math.ceil(usersAmount / 50)}
            onClick={(event) => {
              console.log(event.target.value);
            }}>
            {Math.ceil(usersAmount / 50)}
          </button>
        </li>
        <li>
          <button
            value={19}
            onClick={(event) => {
              console.log(event.target.value);
            }}>
            {'->'}
          </button>
        </li>
      </ul>
    </div>
  );
};
