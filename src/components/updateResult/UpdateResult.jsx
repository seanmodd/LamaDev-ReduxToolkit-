import React, { useContext, useState } from 'react';
import '../update/update.css';
// import { update, remove } from "../../redux/userSlice";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateUser2 } from '../../redux/userSlice';

export default function Update() {
  return (
    <div className="update">
      <div className="updateWrapper">
        <label>Username</label>
        <div className="formResult">Here is the username:</div>

        <label>Email</label>
        <div className="formResult">Here is the email:</div>
      </div>
    </div>
  );
}
