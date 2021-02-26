import React, { useState, useEffect } from 'react';
import { Prev } from 'react-bootstrap/esm/PageItem';
import { PaginationBar } from './PaginationBar';

export default function TableUsers({}) {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPageNumber, setCurrentPageNumber] = useState(3);

  const [isSortedById, setIsSortedById] = useState(true);
  const [isSortedByFirstName, setIsSortedByFirstName] = useState(false);
  const [isSortedByLastName, setIsSortedByLastName] = useState(false);
  const [isSortedByEmail, setIsSortedByEmail] = useState(false);
  const [isSortedByPhone, setIsSortedByPhone] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      // console.log('is loading value: ', isLoading);

      // setIsLoading((prevIsLoading) => !prevIsLoading);
      setIsLoading(true);
      // console.log('is loading value: ', isLoading);

      await fetch(
        'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D',
      )
        .then((res) => res.json())
        .then((result) => {
          setUsersList(result.sort((a, b) => a.id - b.id));
        });

      setIsLoading((prevIsLoading) => !prevIsLoading);
    };

    fetchPosts();
  }, []);

  // console.log(usersList);

  function sortByIdHandle(value) {
    usersList.sort((a, b) => undefined);
  }
  // function sortFirstNameHandle(value) {
  //   setUsersList((prevUsersList) => {
  //     return prevUsersList.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
  //   });
  // }
  function sortFirstNameHandle() {
    setUsersList(usersList.slice().sort((a, b) => (a.firstName > b.firstName ? 1 : -1)));
  }
  function sortLastNameHandle(value) {
    usersList.sort((a, b) => {});
  }
  function sortByEmailHandle(value) {
    usersList.sort((a, b) => {});
  }
  function sortByPhoneHandle(value) {
    usersList.sort((a, b) => {});
  }

  if (isLoading) {
    return <h2>Table is loading...</h2>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <button>ID</button>
            </th>
            <th>
              <button onClick={sortFirstNameHandle}>First Name</button>{' '}
            </th>
            <th>
              <button>Last Name</button>{' '}
            </th>
            <th>
              <button>Email</button>
            </th>
            <th>
              <button>Phone</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => {
            return (
              <tr key={user.id + user.phone + user.phone}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            );
          })}

          {console.log(usersList)}
        </tbody>
      </table>
      <PaginationBar
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={setCurrentPageNumber}
        usersAmount={usersList.length}
      />
    </div>
  );
}

{
  /* {{
        id: 436,
        firstName: 'Jess',
        lastName: 'Hovanec',
        email: 'WWard@dolor.io',
        phone: '(262)557-8921',
        address: {
          streetAddress: '889 Curabitur Ln',
          city: 'Rawlins',
          state: 'RI',
          zip: '92481',
        },
      }} */
}
{
  /* {{
          id: 2,
          firstName: 'Rashad',
          lastName: 'Millegan',
          email: 'KKoehn@dolor.ly',
          phone: '(349)728-4984',
          address: {
            streetAddress: '5597 Aenean Dr',
            city: 'Mount Vernon',
            state: 'AL',
            zip: '85831',
          },
          description:
            'massa pulvinar egestas sagittis tincidunt ipsum lorem consectetur elementum ipsum sapien fringilla mattis egestas neque suspendisse sit tellus dolor lectus nunc lectus orci dolor risus consectetur rutrum augue tincidunt egestas pulvinar magna',
        }} */
}
