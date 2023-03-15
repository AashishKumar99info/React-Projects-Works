import React,{useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [userList,setUsersList] = useState([])

  const AddUserHandler = (uName,uAge) => {
    setUsersList((prevUsersList) => {
        return [{name:uName,age:uAge,id:Math.random().toString()},...prevUsersList]
    });
  }

  return (
    <Fragment>
      <AddUser onAddUser = {AddUserHandler} />
      <UsersList user = {userList} />
    </Fragment>
  );
}

export default App;
