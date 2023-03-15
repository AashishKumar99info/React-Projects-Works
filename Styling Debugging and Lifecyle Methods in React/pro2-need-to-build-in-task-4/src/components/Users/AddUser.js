import React,{useState , useRef} from "react";

import "./AddUser.css"

import Card from "../UI/Card";

import Button from "../UI/Button";

import ErrorModal from "../UI/ErrorModal";

import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef =useRef();

    // const [enteredUsername,setEnteredUsername]=useState('')
    // const [enteredAge,setEnteredAge]=useState('')
    const [error,setError]=useState()


    const AddUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value
        const enteredUserAge = ageInputRef.current.value
        const enteredCollege = collegeInputRef.current.value
        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
            setError({
                title : "Invalid Input",
                message : "Please Enter a valid name and age (Non-Empty values)"
            })
            return;
        }
        if(parseInt(enteredUserAge) < 1) { // // here we can also writ only +enteredAge this means it will also convert the enteredAge string to integer value. 
            setError({
                title : "Invalid age",
                message : "Please Enter a valid age (age should > 0)"
            })
            return;
        }
        props.onAddUser(enteredName,enteredUserAge,enteredCollege)
        nameInputRef.current.value = ""
        ageInputRef.current.value = ""
        collegeInputRef.current.value = ""
        // console.log(enteredUsername,enteredAge) this console was working when we were using useState Hook
        // setEnteredAge('')
        // setEnteredUsername('')
    };

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value)
    // }
    
    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value)
    // }

    const errorHandler = () => {
        setError(null);
    };


    return (
        <Wrapper>
           {error && <ErrorModal title = {error.title} message = {error.message} onConfirm={errorHandler} />}
                <Card className = {"input"}>
                    <form onSubmit={AddUserHandler}>
                        <label htmlFor="username">User Name</label>
                        <input id="username" type="text" /*value={enteredUsername} onChange={usernameChangeHandler}*/ ref = {nameInputRef} placeholder="Enter User Name"></input>
                        <label htmlFor="age">Age (Year)</label>
                        <input id="age" type="number" /*value={enteredAge} onChange={ageChangeHandler}*/ ref = {ageInputRef} placeholder="Enter Age"></input>
                        <label htmlFor="college">College Name</label>
                        <input id="college" type="text" ref = {collegeInputRef} placeholder="Enter college"></input>
                        
                        <Button type="submit">Add User </Button>
                    </form>
                </Card>
        </Wrapper>
    );
};

export default AddUser;
