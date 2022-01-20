import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../redux/api/api';
import styles from '../../app/scss/Form.module.scss';

const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const navigate = useNavigate();

  const submitSignUp = () => {
    const user = {
      name,
      email,
      password,
      passwordConfirmation,
    };
    dispatch(signUp(user));
    navigate('/');
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
          className={styles.input}
          required
        />
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          className={styles.input}
          required
        />
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
          className={styles.input}
          required
        />
        <input
          placeholder="Password Confirmation"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          type="password"
          value={passwordConfirmation}
          className={styles.input}
          required
        />
        <input type="submit" value="Sign Up" className={styles.button} />
      </form>
    </div>
  );
};

export default SignUp;
