import React, { useState } from 'react';

import { FormRow, Logo, Alert } from '../components';
import { useAppProvider } from '../context/ContextProvider';

const Register = () => {
  const inititalState = {
    username: '',
    email: '',
    password: '',
    isMember: true,
  };

  const [inputValues, setInputValues] = useState(inititalState);
  const { state, showAlert, displayAlert } = useAppProvider();
  console.log(state);

  const toggleMember = () => {
    setInputValues({ ...inputValues, isMember: !inputValues.isMember });
  };

  const onChangeHandle = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, isMember } = inputValues;
    if (!email || !password || (!isMember && !username)) {
      displayAlert();
    }
  };

  return (
    <main>
      <form className="form" onSubmit={onSubmit}>
        <Logo />

        <div className="form-header">
          <h4>{inputValues.isMember ? 'Login' : 'Register'}</h4>
        </div>
        {showAlert && <Alert />}

        {/* name input  */}
        {!inputValues.isMember && (
          <FormRow
            label="Name"
            htmlFor="name"
            id="name"
            type="text"
            name="username"
            value={inputValues.username}
            handleChange={onChangeHandle}
          />
        )}

        {/* Email input  */}
        <FormRow
          label="Email"
          htmlFor="email"
          id="email"
          type="email"
          name="email"
          value={inputValues.email}
          handleChange={onChangeHandle}
        />

        {/* password input  */}
        <FormRow
          label="Password"
          htmlFor="password"
          id="password"
          type="password"
          name="password"
          value={inputValues.password}
          handleChange={onChangeHandle}
        />

        <button className="btn btn-submit" type="submit">
          Submit
        </button>
        <div className="form-footer">
          <p>
            {inputValues.isMember ? 'Not a member yet? ' : 'Already a member? '}
            <span>
              {inputValues.isMember ? (
                <button
                  type="link"
                  className="member-btn"
                  onClick={toggleMember}
                >
                  Register
                </button>
              ) : (
                <button
                  type="button"
                  className="member-btn"
                  onClick={toggleMember}
                >
                  Login
                </button>
              )}
              {/* <a href="/">Login</a> */}
            </span>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Register;
