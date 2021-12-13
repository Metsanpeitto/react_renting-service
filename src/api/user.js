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

