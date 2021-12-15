/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { getItems } from "../../redux/api/api";
import { useNavigate } from "react-router-dom";

const Details = () => {

  const param = useParams();
  const items = useSelector((state) => state.itemsReducer.items);
  const dispatch = useDispatch();
  const [calledItems, setCalledItems] = useState(null);
  const [itemDisplay, setItemDisplay] = useState(null);
  let navigate = useNavigate();


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
      <div>
        <div>
          <img src={itemDisplay.image} alt="image" />
          <h1>{itemDisplay.title}</h1>
          <h5>{itemDisplay.description}</h5>
          <h5>{itemDisplay.price}</h5>

          <Link
            to={{
                pathname: `/new_reservation/${itemDisplay.id}`,
            }}
            data={itemDisplay}
          >
            Reserve
          </Link>

          <button onClick={() => navigate('/')}>Go Back</button>
          
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
};

export default Details;
