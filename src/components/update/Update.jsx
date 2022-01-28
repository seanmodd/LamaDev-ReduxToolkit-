import React, { useContext, useEffect, useState } from 'react';
import './update.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser2, update, remove } from '../../redux/userSlice';

export default function Update() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    // without API
    dispatch(update({ name, email }));
    // with API
    // dispatch(updateUser2({ name, email }));
    console.log('update user', user);
  };
  useEffect(() => {
    console.log('update user', user);
  }, []);

  return (
    <div className="update">
      <div className="updateWrapper">
        <form>
          <div className="formItem">
            <label>Username</label>
            <input
              className="formInput"
              type="text"
              placeholder={user.name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="formItem">
            <label>Email</label>
            <input
              className="formInput"
              type="text"
              placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
