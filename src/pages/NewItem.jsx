/* eslint-disable */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from '../redux/api/api';

function NewItem() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState("");
    let navigate = useNavigate();


    const submitItemToStore = () => {
        const newItem = {
            name,
            description,
            image,
            color,
            price,
        };

        dispatch(addItem(newItem));
    };

    return (
        <div className="reserve-page">
            <h2 className="adder-header">Create a new Item</h2>
            <div className="add-form">
                <input
                    className="adder-name input"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="input-name"
                    id="input-name"
                />
                <input
                    className="adder-description input"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    name="input-description"
                    id="input-description"
                />
                <input
                    className="adder-image input"
                    placeholder="Image"
                    onChange={(e) => setImage(e.target.value)}
                    type="text"
                    name="input-image"
                    id="input-image"
                />
                <input
                    className="adder-price input"
                    placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    name="input-price"
                    id="input-price"
                />
                <input
                    className="adder-color input"
                    placeholder="Color"
                    onChange={(e) => setColor(e.target.value)}
                    type="text"
                    name="input-color"
                    id="input-color"
                />
                <button
                    className="btn-1"
                    type="submit"
                    onClick={submitItemToStore}
                >
                    CREATE
                </button>
                <button onClick={() => navigate('/')}>Go Back</button>

            </div>
        </div>
    );
}

export default NewItem;
