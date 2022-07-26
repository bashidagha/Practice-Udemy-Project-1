import React from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import './adduser.scss'

const AddUser = (props) => {

  const addUserHandler = (event) =>{
    event.preventDefault();
  }


  return (
    <Card passClass="input">
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id="username" type="text"></input>
            <label htmlFor='age'>Age</label>
            <input id="age" type="number"></input>
            <Button type="submit">Add User</Button>
        </form>
    </Card>
  )
}

export default AddUser