import React from 'react'
import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import './adduser.scss'

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsename] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) =>{
    event.preventDefault();

    if((enteredUsername.trim().length === 0) || (enteredAge.trim().length === 0)){
        setError({
            title: "empty input!",
            message: "you left one of the age or username empty"
        })
        return;
    }

    //plus for ensure convert string to number
    if(+enteredAge < 1){
        setError({
            title: "invalid age!",
            message: "enter an age greater than 0"
        })
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

  const modalErrorOkay = ()=>{
    setError(false);
  }

  return (
    <>
    {
        error &&  <ErrorModal title={error.title} message={error.message} onOkay={modalErrorOkay}/>
    }

    <Card passClass="input">
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id="username" value={enteredUsername} type="text" onChange={onChangeEnteredUsename}></input>
            <label htmlFor='age'>Age</label>
            <input id="age" value={enteredAge} type="number" onChange={onChangeEnteredAge}></input>
            <Button type="submit">Add User</Button>
        </form>
    </Card>
    </>
    
  )
}

export default AddUser