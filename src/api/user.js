import axios from 'axios';

const url = 'https://frozen-dusk-66130.herokuapp.com/';

const signIn = async (user) => {
    const response = await axios.post(`${url}/login`,
        {
            user: {
                email: `${user.email}`,
                password: `${user.password}`,
            }
        }
    )
        .then((res) => {
            if (res.status === 201) {
                localStorage.setItem("token", res.headers.authorization);
                return res;
            } else {
                throw new Error(res);
            }
        })
        .catch((err) => console.error(err));
    return response
}



const signUp = async (user) => axios.post(`${url}/register`, {
  user: {
    name: user.name,
    email: user.email,
    password: user.password,
    password_confirmation: user.passwordConfirmation,
  },
});

const signOut = async (user) => {
    const response = await axios.delete(`${url}/logout`,
        {
            user: {
                email: `${user.email}`,
                password: `${user.password}`,
            }
        }
    )
        .then((res) => {
            if (res.status === 204) {
                localStorage.setItem("token", null);
                return res;
            } else {
                throw new Error(res);
            }
        })
        .catch((err) => console.error(err));
    return response
}


export default { signIn, signUp, signOut };
