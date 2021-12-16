import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItems, deleteItem } from '../../redux/api/api';
import styles from './DeleteItem.module.scss';

const DeleteItem = () => {
  const user = useSelector((state) => state.userReducer.user);
  const items = useSelector((state) => state.itemsReducer.items);
  const dispatch = useDispatch();
  const [calledItems, setCalledItems] = useState(null);

  useEffect(() => {
    if (!calledItems && items.length === 0) {
      dispatch(getItems());
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
    <>
      {user.id ? (
        <div className={styles.container}>
          {calledItems
            ? calledItems.map((item) => (
              <div className={styles.card} key={item.name}>
                <h4>{item.name}</h4>
                <button type="button" id={item.id} onClick={(e) => submitDeleteToStore(e)}>Delete Item</button>
              </div>
            )) : null}
        </div>
      ) : null}
    </>
  );
};

export default DeleteItem;
