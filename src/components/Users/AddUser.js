import React from "react";
import { useRef } from "react";
import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import "./adduser.scss";

const AddUser = (props) => {

  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;


    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "empty input!",
        message: "you left one of the age or username empty",
      });
      return;
    }

    //plus for ensure convert string to number
    if (+enteredUserAge < 1) {
      setError({
        title: "invalid age!",
        message: "enter an age greater than 0",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);

    //manipulate DOM Manaul
    //Don't do this
    //useRef just use use instead of useState when we have a single read
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''


    //it's called uncontrolled components
    // in previous we rerender onChange inputs and it was un neccesary for
    // our project(controlled component or stateful component),
    //  in similar situation that we need only read 
    // a value, useRef is better and load a few load to browser 

  };

  const modalErrorOkay = () => {
    setError(false);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onOkay={modalErrorOkay}
        />
      )}

      <Card passClass="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
