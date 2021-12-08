/* eslint-disable */
import axios from 'axios';

const url = 'http://localhost:3000/items';

const getItems = async () => axios.get(`${url}`).then((result) => {
  let items = [];
  if (result.status === 200) {
    console.log(result.data)
    items = result.data;
  }
  return items;
});

const addItem = async (item) => axios.post(`${url}`, {
  name: item.name,
  description: item.description,
  image: item.image,
  price: item.price,
  color: item.color,
})
  .then((result) => result.data);


export default { getItems, addItem };
