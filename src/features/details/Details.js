import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getItems } from '../../redux/api/api';
import styles from './Details.module.scss';

const Details = () => {
  const param = useParams();
  const items = useSelector((state) => state.itemsReducer.items);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const [calledItems, setCalledItems] = useState(null);
  const [itemDisplay, setItemDisplay] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!calledItems && items.length === 0) {
      setCalledItems(true);
      dispatch(getItems());
    }

    if (items && param) {
      const raw = items.find((item) => item.name === param.itemName);
      setItemDisplay(raw);
    }
  });

  if (itemDisplay) {
    return (
      <div className={styles.container}>

        <div className={styles.image}>
          <img src={itemDisplay.image} alt="" />
        </div>

        <div className={styles.info}>
          <h1>{itemDisplay.name}</h1>
          <h5>{itemDisplay.description}</h5>
          <h5>
            Price: $
            {itemDisplay.price}
          </h5>
          {user.name
            ? (
              <>
                <Link
                  to={{
                    pathname: `/new_reservation/${itemDisplay.id}`,
                  }}
                  data={itemDisplay}
                >
                  Reserve
                </Link>
              </>
            )
            : null}

        </div>

        <button type="button" className={styles.back} onClick={() => navigate('/')}>&lt;</button>

      </div>
    );
  }
  return (
    <div>
      <h1>Loading</h1>
    </div>
  );
};

export default Details;
