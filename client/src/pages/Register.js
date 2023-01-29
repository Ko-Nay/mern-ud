import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormRow, Logo, Alert } from '../components';
import { useAppProvider } from '../context/ContextProvider';

const Register = () => {
  const inititalState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
  };

  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState(inititalState);
  const { user, isLoading, showAlert, displayAlert, setupUser } =
    useAppProvider();

  const toggleMember = () => {
    setInputValues({ ...inputValues, isMember: !inputValues.isMember });
  };

  const onChangeHandle = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = inputValues;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
    }

    const currentUser = { name, email, password };
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: 'login',
        alertText: 'Login successful! Redirecting...',
      });
    } else {
      setupUser({
        currentUser,
        endPoint: 'register',
        alertText: 'User Created! Redirecting...',
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    }
  }, [user, navigate]);

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
            name="name"
            value={inputValues.name}
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

        <button className="btn btn-block" type="submit" disabled={isLoading}>
          Submit
        </button>
        <div className="form-footer">
          <p>
            {inputValues.isMember ? 'Not a member yet? ' : 'Already a member? '}
            <button type="button" onClick={toggleMember} className="member-btn">
              {inputValues.isMember ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </form>
    </main>
  );
};

export default Register;
