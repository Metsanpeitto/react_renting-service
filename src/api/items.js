import axios from 'axios';

const url = 'https://frozen-dusk-66130.herokuapp.com/items';

const getItems = async () => axios.get(`${url}`).then((result) => {
  let items = [];
  if (result.status === 200) {
    items = result.data;
  }
  return items;
});

const deleteItem = async (itemId) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: token,
    },
  };
  axios.delete(`${url}/${itemId}`, config).then((result) => result);
};

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

    return response;
}




export default { getItems, addItem, deleteItem };
