import React from 'react'
import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import './adduser.scss'

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsename] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) =>{
    event.preventDefault();

    if((enteredUsername.trim().length === 0) || (enteredAge.trim().length === 0)){
        return;
    }

    //plus for ensure convert string to number
    if(+enteredAge < 1){
        return;
    }

    props.onAddUser(enteredUsername, enteredAge)
    // console.log([enteredAge, enteredUsername])
    setEnteredAge('')
    setEnteredUsename('')
  }

  const onChangeEnteredUsename = (event)=>{
    setEnteredUsename(event.target.value)
  }

  const onChangeEnteredAge = (event)=>{
    setEnteredAge(event.target.value)
  }

  return (
    <Card passClass="input">
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id="username" value={enteredUsername} type="text" onChange={onChangeEnteredUsename}></input>
            <label htmlFor='age'>Age</label>
            <input id="age" value={enteredAge} type="number" onChange={onChangeEnteredAge}></input>
            <Button type="submit">Add User</Button>
        </form>
    </Card>
  )
}

export default AddUser