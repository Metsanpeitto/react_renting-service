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




export default { getItems, addItem, deleteItem };
