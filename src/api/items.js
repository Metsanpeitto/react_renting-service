import axios from 'axios';
import { toast } from 'react-toastify';

const url = 'https://frozen-dusk-66130.herokuapp.com/items';

const getItems = async () => axios.get(`${url}`).then((result) => {
  let items = [];
  if (result.status === 200) {
    items = result.data;
  } else {
    toast.error('There was an error');
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
  const response = axios.delete(`${url}/${itemId}`, config).then((res) => {
    let status = null;
    if (res.status === 302) {
      toast.error('There was an error');
    }
    if (res.status === 204) {
      toast.success('Boat deleted successfullly');
      status = itemId;
    }
    return status;
  });
  return response;
};

const addItem = async (item) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const body = {
    user_id: item.userId,
    name: item.name,
    description: item.description,
    image: item.image,
    price: item.price,
    color: item.color,
  };

  const response = axios.post(`${url}`, body, config)
    .then((res) => {
      if (res.status === 201) {
        toast.success('Boat added successfullly');
        return res;
      }
      toast.error('There was an error');
      return null;
    });
  return response;
};

export default { getItems, addItem, deleteItem };
