import { useEffect, useState } from 'react';

export default function RandomUsers(props) {
  const [usersList, setUsersList] = useState([]);
  const [counter, setCounter] = useState(0);
  const [refetch, setRefetch] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. useEffect with no dependencies triggers every render ANTIPATTERN
    console.log('trigger always');
  });

  useEffect(() => {
    // 2. useEffect with a dependency trigger every time the dependency is updated
    console.log('trigger on counter change 🔰');
  }, [counter]);

  useEffect(() => {
    // 3. useEffect with an empty array as dependency trigger only the first time the component renders
    document.title = 'My Nice Users List APP';
  }, []);

  useEffect(() => {
    console.log('trigger only on first render ✅');

    async function getRandomUsers() {
      const data = await fetch('https://randomuser.me/api/?results=3');

      const users = await data.json();
      const cleanedUsers = users.results.map((user) => {
        return {
          name: user.name,
          email: user.email,
          gender: user.gender,
        };
      });
      setUsersList(cleanedUsers);
      setLoading(false);
    }
    getRandomUsers().catch(() => {
      console.log('fetch fails');
    });
  }, [refetch]);

  // if (loading) {
  //   return <h1>loading...</h1>;
  // }

  return loading ? (
    <h1>loading...</h1>
  ) : (
    <div>
      {usersList.map((user) => {
        return (
          <div key={`${user.name.fist}-${user.name.last}`}>
            <p>
              name: {user.name.first} {user.name.last}
            </p>
            <p>gender: {user.gender}</p>
            <p>email: {user.email}</p>
            <hr />
          </div>
        );
      })}
      <button
        onClick={() => {
          // 1. copy the state
          // 2. update the value
          const filteredUserList = usersList.filter((user, index) => {
            return index < usersList.length - 1;
          });
          // 3. set new state
          setUsersList(filteredUserList);
        }}
      >
        remove last user
      </button>
      <button
        onClick={() => {
          // 1. copy the state
          // 2. update the value
          const updatedUsersList = [
            ...usersList,
            {
              name: {
                title: 'Mrs',
                first: 'Ines',
                last: 'Rodriguez',
              },
              gender: 'female',
              email: 'ines.rodriguez@myemail.com',
            },
          ];
          // 3. set new state
          setUsersList(updatedUsersList);
        }}
      >
        Add new user
      </button>
      <button
        onClick={() => {
          // 1. copy the state
          // 2. update the value
          const updatedList = usersList.map((user, index) => {
            if (index === 0) {
              const newUser = { ...user };
              newUser.name.first = 'abc';
              newUser.name.last = '123';
              return newUser;
            }
            return user;
          });
          // 3. set new state
          setUsersList(updatedList);
        }}
      >
        Update name of new user
      </button>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <button onClick={() => setRefetch(!refetch)}>refetch</button>
    </div>
  );
}
