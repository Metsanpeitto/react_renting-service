/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { signOut, signIn } from '../../redux/api/api';

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
        <section>
            {!userR.id ? (<div><div>
                <div className="reserve-page">
                    <h2 className="adder-header">Sign In </h2>
                    <form className="add-form">
                        <input
                            className="signin input"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            id="input-name"
                        />
                        <input
                            className="log input"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            id="input-password"
                        />
                        <button
                            className="btn-1"
                            type="submit"
                            onClick={submitSignIn}
                        >
                            Sign In
                        </button>
                        <button onClick={() => navigate('/')}>Go Back</button>
                    </form>
                </div>
            </div>
                <div>
                    <Link
                        key="sign_up"
                        to={`${process.env.PUBLIC_URL}/sign_up`}
                        active="true"
                        className="nav-link"
                    >
                        Sign Up
                    </Link>
                </div>  </div>) :
                (<div>
                    <button onClick={submitSignOut}>Sign Out</button>
                    <button onClick={() => navigate('/')}>Go Back</button>
                </div>)
            }
        </section>
    )
};

export default User;