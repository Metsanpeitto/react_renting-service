/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { addItem } from "../../redux/api/api";

import styles from "./NewItem.module.scss";

function NewItem() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const items = useSelector((state) => state.itemsReducer.items);
  const [calledItems, setCalledItems] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [color, setColor] = useState("White");
  const [price, setPrice] = useState("");
  const images = [
    "https://i.imgur.com/SZJIKne.png",
    "https://i.imgur.com/7SAXljQ.png",
    "https://i.imgur.com/ZneOae2.png",
    "https://i.imgur.com/15OQ5yO.png",
    "https://i.imgur.com/RdEZTBM.png",
    "https://i.imgur.com/XSWV5kS.png",
  ];
  const options = [
    { value: "Black", label: "Black" },
    { value: "White", label: "White" },
    { value: "Yellow", label: "Yellow" },
    { value: "Blue", label: "Blue" },
    { value: "Green", label: "Green" },
  ];

  let navigate = useNavigate();

  useEffect(() => {
    if (!calledItems && items.length !== 0) {
      setCalledItems(items);
    }
  });

  const selectImage = (data) => {
    if (image) {
      setImage(null);
    } else {
      setImage(data);
    }
  };

  const changeColor = (data) => {
    setColor(data);
  };

  const submitItemToStore = (e) => {
    const newItem = {
      userId: user.id,
      name,
      description,
      image,
      color,
      price,
    };
    e.preventDefault();

    if (newItem.userId && name && description && image && price) {
      console.log(newItem)
      dispatch(addItem(newItem));
      navigate("/");
    }
  };

  return (
    <div className={styles.container}>
      <h2>ADD NEW ITEM</h2>
      <form onSubmit={(e) => submitItemToStore(e)}>
        <input
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Description"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          placeholder="Price"
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <Select
          options={options}
          onChange={(data) => changeColor(data.value)}
        />

        <div className="image-selector-block">
          {!image ? (
            <div className="">
              {" "}
              <h4>Select an image from the list:</h4>
              <div className="image-selector">
                {images.map((image) => {
                  return (
                    <div className="" key={image}>
                      <img
                        src={image}
                        alt="image"
                        className="img-selector"
                        onClick={() => selectImage(image)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="" key={image}>
              <h4>Click on the picture to change it</h4>
              <img
                src={image}
                alt="image"
                className="img-selector"
                onClick={() => selectImage(image)}
              />
            </div>
          )}
        </div>
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
}

export default NewItem;
