/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../../redux/api/api';
import { useNavigate } from "react-router-dom";

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
        <div className="reserve-page">
            <h2 className="adder-header">Sign Up </h2>
            <form className="add-form">
                <input
                    className="log input"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    id="signup-name"
                    autoComplete="false"
                    value={name}
                />
                <input
                    className="log input"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="signup-email"
                    autoComplete="false"
                    value={email}
                />
                <input
                    className="log input"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="signup-password"
                    autoComplete="false"
                    value={password}
                />
                <input
                    className="log input"
                    placeholder="Password"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    type="password"
                    name="passworf_confirmation"
                    id="signup-confirmation"
                    autoComplete="false"
                    value={passwordConfirmation}
                />
                <button
                    className="btn-1"
                    type="submit"
                    onClick={submitSignUp}
                >
                    Sign Up
                </button>
                <button onClick={() => navigate('/')}>Go Back</button>
            </form>
        </div>
    )
};

export default SignUp;