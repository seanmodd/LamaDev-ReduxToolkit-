import React, { useContext, useState } from 'react';
import Warning from '../warning/Warning';
import './update.css';
// import { update, remove } from "../../redux/userSlice";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateUser2 } from '../../redux/userSlice';

export default function Update() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    // without API
    // dispatch(update({ name, email }));
    // with API
    dispatch(updateUser2({ name, email }));
  };

  return (
    <div className="update">
      <div className="updateWrapper">
        <form>
          <div className="formItem">
            <label>Username</label>
            <input
              className="formInput"
              type="text"
              // placeholder={user.user.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="formItem">
            <label>Email</label>
            <input
              className="formInput"
              type="text"
              // placeholder={user.user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="formItem">
            <label>Password</label>
            <input className="formInput" type="password" />
          </div>
          <button
            disabled={user.pending}
            className="updateButton"
            onClick={handleClick}
          >
            Update
          </button>
          {user.error && <span className="error">Something went wrong!</span>}
          {user.pending === false && (
            <span className="success">Account has been updated!</span>
          )}
        </form>
      </div>
    </div>
  );
}
