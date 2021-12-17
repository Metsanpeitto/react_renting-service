import axios from 'axios';
import { toast } from 'react-toastify';

const url = 'https://frozen-dusk-66130.herokuapp.com';

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
        toast.success('User signed in successfullly');
        localStorage.setItem('token', res.headers.authorization);
        return res;
      }
      toast.error('There was an error');
      return null;
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
  if (res.status === 201) {
    toast.success('User signed up successfullly');
    return null;
  }
  toast.error('There was an error');
  return null;
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
      if (res.status === 200) {
        localStorage.setItem('token', null);
        toast.success('User signed out successfullly');
        return res;
      }
      toast.error('There was an error');
      return null;
    });
  return response;
};

export default { signIn, signUp, signOut };
