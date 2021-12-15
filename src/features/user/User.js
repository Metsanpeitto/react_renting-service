/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { signOut, signIn } from '../../redux/api/api';
import styles from '../../app/scss/Form.module.scss';

const User = () => {
    const userR = useSelector((state) => state.userReducer.user);
    const dispatch = useDispatch();
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const submitSignOut = (e) => {
        e.preventDefault()
        const data = {
            email,
            password
        };
        dispatch(signOut(data));
    };

    useEffect(() => {
        if (user === "" && userR[0]) {
            setUser(userR)
        }
        const token = localStorage.getItem("token")
    });

    const submitSignIn = (e) => {
        e.preventDefault()
        const data = {
            email,
            password
        };
        dispatch(signIn(data));
        navigate('/')
    };

    return (
        <>
            {!userR.id ?
              (<>
                <div className={styles.container}>
                  <h2>SIGN IN</h2>
                  <form onSubmit={(e) => submitSignIn(e)}>
                      <input
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                      />
                      <input
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                      />
                      <input type="submit" value="Sign In" />
                      <Link className={styles.button}
                        to={`${process.env.PUBLIC_URL}/sign_up`}
                      >
                        Sign Up
                      </Link>
                  </form>
                </div>
              </>) :

              (<div>
                <button onClick={submitSignOut}>Sign Out</button>
              </div>)
            }
        </>
    )
};

export default User;