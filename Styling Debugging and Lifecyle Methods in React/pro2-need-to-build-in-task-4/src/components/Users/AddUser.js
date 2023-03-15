import React,{useState} from "react";

import "./AddUser.css"

import Card from "../UI/Card";

import Button from "../UI/Button";

import ErrorModal from "../UI/ErrorModal";

import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const [enteredUsername,setEnteredUsername]=useState('')
    const [enteredAge,setEnteredAge]=useState('')
    const [error,setError]=useState()


    const AddUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title : "Invalid Input",
                message : "Please Enter a valid name and age (Non-Empty values)"
            })
            return;
        }
        if(parseInt(enteredAge) < 1) { // // here we can also writ only +enteredAge this means it will also convert the enteredAge string to integer value. 
            setError({
                title : "Invalid age",
                message : "Please Enter a valid age (age should > 0)"
            })
            return;
        }
        props.onAddUser(enteredUsername,enteredAge)
        console.log(enteredUsername,enteredAge)
        setEnteredAge('')
        setEnteredUsername('')
    };
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }
    
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null);
    };


    return (
        <Wrapper>
           {error && <ErrorModal title = {error.title} message = {error.message} onConfirm={errorHandler} />}
                <Card className = {"input"}>
                    <form onSubmit={AddUserHandler}>
                        <label htmlFor="username">User Name</label>
                        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} placeholder="Enter User Name"></input>
                        <label htmlFor="age">Age (Year)</label>
                        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} placeholder="Enter Age"></input>
                        <Button type="submit">Add User </Button>
                    </form>
                </Card>
        </Wrapper>
    );
};

export default AddUser;
