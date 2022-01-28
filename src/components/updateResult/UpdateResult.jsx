import React, { useContext, useState } from 'react';
import '../update/update.css';
// import { update, remove } from "../../redux/userSlice";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateUser2 } from '../../redux/userSlice';

export default function Update() {
  const user = useSelector((state) => state.user);
  return (
    <div className="update">
      <div className="updateWrapper">
        <label>Username</label>
        <div className="formResult">Here is the username: {user.name}</div>

        <label>Email</label>
        <div className="formResult">Here is the email: {user.email}</div>
      </div>
    </div>
  );
}
