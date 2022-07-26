import React from "react";
import Card from "../UI/Card";
import "./userslist.scss";

const UsersList = (props) => {
  return (
    <Card passClass="users">
      <ul>
        {props.users.map((user) => (
          <li key={Math.random().toString()}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
