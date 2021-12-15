/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../../redux/api/api';
import { useNavigate } from "react-router-dom";
import styles from '../../app/scss/Form.module.scss';

const SignUp = () => {
    const user = useSelector((state) => state.userReducer.user);
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    let navigate = useNavigate();

    const submitSignUp = () => {
        let user = {
            name,
            email,
            password,
            passwordConfirmation
        }
        dispatch(signUp(user));
        navigate('/')
    };

    return (
      <div className={styles.container}>
        <h2>SIGN UP</h2>
        <form onSubmit={() => submitSignUp()}>
          <input
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
          />
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
          />
          <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
          />
          <input
            placeholder="Password Confirmation"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            type="password"
            value={passwordConfirmation}
          />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    )
};

export default SignUp;