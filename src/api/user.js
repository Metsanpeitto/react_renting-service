/* eslint-disable */
import axios from 'axios';
import { toast } from "react-toastify";

const url = 'https://frozen-dusk-66130.herokuapp.com/';

const signIn = async (user) => {
  const response = await axios.post(`${url}/login`,
    {
      user: {
        email: `${user.email}`,
        password: `${user.password}`,
      },
    })
    .then((res) => {
      if (res.status === 201) {
        toast.success("User signed in successfullly");
        localStorage.setItem('token', res.headers.authorization);
        return res;
      } else {
        toast.warning("There was an error");
      }
    });
  return response;
};

const signUp = async (user) => axios.post(`${url}/register`, {
  user: {
    name: user.name,
    email: user.email,
    password: user.password,
    password_confirmation: user.passwordConfirmation,
  },
}).then((res) => {
  console.log(res);
  if (res.status === 201) {
    toast.success("User signed up successfullly");
  } else {
    toast.warning("There was an error");
  }
});

const signOut = async (user) => {
  const response = await axios.delete(`${url}/logout`,
    {
      user: {
        email: `${user.email}`,
        password: `${user.password}`,
      },
    })
    .then((res) => {
      console.log(res)
      if (res.status === 200) {
        localStorage.setItem('token', null);
        toast.success("User signed out successfullly");
        return res;
      } else {
        toast.warning("There was an error");
      }
    });
  return response;
};

export default { signIn, signUp, signOut };
