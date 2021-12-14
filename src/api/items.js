/* eslint-disable */
import axios from 'axios';

const url = 'http://localhost:3000/items';

const getItems = async () => axios.get(`${url}`).then((result) => {
    let items = [];
    if (result.status === 200) {
        items = result.data;
    }
    return items;
});

const deleteItem = async (itemId) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: token
        }
    }
    axios.delete(`${url}/${itemId}`, config).then((result) => {
        let items = [];
        if (result.status === 200) {
            items = result.data;
        }
        return result;
    });
}



const addItem = async (item) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: token
        }
    }
    console.log(item)
    const body = {
        user_id: item.userId,
        name: item.name,
        description: item.description,
        image: item.image,
        price: item.price,
        color: item.color,
    };

    const response = axios.post(`${url}`, body, config)
        .then((result) => result.data);
    console.log(result)
    return response;
}



export default { getItems, addItem, deleteItem };
