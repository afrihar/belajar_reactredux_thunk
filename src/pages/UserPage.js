import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fecthUsers} from "../actions/userAction";

const UserPage = () => {
  const users = useSelector(state=> state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fecthUsers())
  },[dispatch])

  return (
      <div>
        <h1>User Page</h1>
        <ol>
          {users.map((user, index) => {
            return (
                <li key={index}>{user.name}</li>
            )
          })}
        </ol>
      </div>
  );
};

export default UserPage;