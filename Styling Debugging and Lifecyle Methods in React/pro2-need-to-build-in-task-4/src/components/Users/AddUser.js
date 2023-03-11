import React from "react";

import "./AddUser.css"

import Card from "../UI/Card";

const AddUser = (props) => {
    const AddUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card className = {"input"}>
            <form onSubmit={AddUserHandler}>
                <label htmlFor="username">User Name</label>
                <input id="username" type="text" placeholder="Enter User Name"></input>
                <label htmlFor="age">Age ( Year )</label>
                <input id="age" type="number" placeholder="Enter Age"></input>
                <button type="submit">Add User </button>
            </form>
        </Card>
    );
};

export default AddUser;
