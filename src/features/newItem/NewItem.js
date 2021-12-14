/* eslint-disable */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from '../../redux/api/api';

import styles from './NewItem.module.scss';

function NewItem() {

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");


  const submitItemToStore = (e) => {
      const newItem = {
          name,
          description,
          image,
          color,
          price,
      };

      e.preventDefault();

      dispatch(addItem(newItem));
  };

  return (
    <div className={styles.container}>
      <h2>ADD NEW ITEM</h2>
      <form onSubmit={(e) => submitItemToStore(e)}>
        <input
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Description"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Image"
          type="text"
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          placeholder="Price"
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          placeholder="Color"
          type="text"
          onChange={(e) => setColor(e.target.value)}
        />
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
}

export default NewItem;
