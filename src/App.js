import React from 'react';
import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {

  const [usersList, setUserLists] = useState([]);

  const addUserHandler = (uName, uAge) =>{
    setUserLists((prevUsersList)=>{
      return [...prevUsersList, {name: uName, age: uAge}]
    })
  }

  return (
    <div>
      <AddUser onAddUser = {addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
