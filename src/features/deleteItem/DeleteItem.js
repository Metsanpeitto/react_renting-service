/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItems, deleteItem } from '../redux/api/api';
import { useNavigate } from "react-router-dom";
import user from '../api/user';

const DeleteItem = () => {
    const user = useSelector((state) => state.userReducer.user);
    const items = useSelector((state) => state.itemsReducer.items);
    const dispatch = useDispatch();
    const [calledItems, setCalledItems] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        console.log("Hi");
        if (!calledItems && items.length === 0) {
            dispatch(getItems());
            console.log(items);
        }
        if (!calledItems || calledItems !== items) {
            setCalledItems(items);
        }
    });

    const submitDeleteToStore = (e) => {
        const itemId = e.currentTarget.id;
        dispatch(deleteItem(itemId));
        dispatch(getItems());
    };

    return (
        <section>
            {user.id ? <div>
                {calledItems ?
                    calledItems.map(item => {
                        return (
                            <div>
                                <h4>{item.name}</h4>
                                -
                                <button id={item.id} onClick={(e) => submitDeleteToStore(e)}>Delete Item</button>
                            </div>
                        )
                    }) : null
                }
            </div> : null}
        </section>
    )
};

export default DeleteItem;
