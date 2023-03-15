import React from "react";

import Card from "../UI/Card";

import "./UsersList.css"

const UsersList = (props) => {
  return (
    <Card className = "users" >
    <ul>
      {props.user.map((user) => (
        <li key={user.id}>
          {" "}
          {user.name} is {user.age}  years old and his College name is {user.college}{" "}
        </li>
      ))}
    </ul>
    </Card>
  );
};

export default UsersList;
