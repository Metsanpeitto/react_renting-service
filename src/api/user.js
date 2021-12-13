/* eslint-disable */
import axios from 'axios';

const url = 'http://localhost:3000';

const signIn = async (user) => {
    const response = await axios.post("http://localhost:3000/login",
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
        password_confirmation: user.passwordConfirmation
    }
})
    .then((result) => {
        Object.json = JSON.parse(result);
        var user = Object.json;
    });



export default { signIn, signUp };