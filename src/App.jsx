import React, { useEffect, useState } from 'react';
import './App.css';
import AppToDoList from './AppToDoList';
import apiClient from './js/api';
// import AppCounter from './AppCounter';
// import AppJSX from './AppJSX';
// import AppProfile from './AppProfile';
// import AppProducts from './AppProducts';

export default function App() {

  const [user, setUser] = useState(null)
  async function assignUser() {
    const result = await getRandomUser()
    setUser(result)
  }
  async function getRandomUser() {
    const result = await apiClient.get('https://api.api-ninjas.com/v1/randomuser', null, {
      headers: {
        'X-Api-Key': 'Bnmmd8WYp5ELwT+WQGOz6Q==FxOF63E0rSQh9FnC'
      }
    })
    console.log(result)
    return result
  }
  useEffect(() => {
    assignUser()
  }, [])

  return (
    <>
    <button onClick={assignUser}>get user again</button>
    {
      user ? (
        <div>
          <h1>{user.username}</h1>
          <p>주소: {user.address}</p>
          <p>이메일: {user.email}</p>
        </div>
      ) : ''
    }
    <AppToDoList />
    {/* <AppProfile />
    <hr />
    <AppProducts />
    <hr />
    <AppJSX />
    <hr />
    <AppCounter /> */}
    </>
  );
}
