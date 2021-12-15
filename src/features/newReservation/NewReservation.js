/* eslint-disable */
import React, { useState, useEffect } from "react";
import DateTimePicker from 'react-datetime-picker';
import Select from 'react-select';
import styles from './NewReservation.module.scss';


import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { addReservation } from '../../redux/api/api';
import { useNavigate } from "react-router-dom";

function NewReservation() {

  const param = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const items = useSelector((state) => state.itemsReducer.items);
  const [city, setCity] = useState("");
  const [value, setDate] = useState(new Date());
  const [itemId, setItemId] = useState("");
  const [optionsReady, setOptionsReady] = useState(false);
  const [options, setOptions] = useState([]);
  let navigate = useNavigate();

  const submitReservationToStore = () => {
    const newReservation = {
      userId: user.id,
      itemId,
      city,
      value
    };
    console.log(newReservation);
    console.log(user);
    dispatch(addReservation(newReservation));
    navigate('/')
  };

  useEffect(() => {
    if (items.length > 0 && optionsReady == false) {
      items.forEach(item => {
        options.push({ value: item.id, label: `${item.name}` })
        console.log(item);
        setOptionsReady(true);
      });
      setOptions(options);
    }

    if (itemId == '' && param.itemId) {
      setItemId(param.itemId)
    }
  });

  return (
    <div className={styles.container}>
      <h2>RESERVE ITEM</h2>

      <form onSubmit={() => submitReservationToStore()}>

        <input
          placeholder="City"
          type="text"
          className={styles.input}
          onChange={(e) => setCity(e.target.value)}
        />

        <DateTimePicker className={styles.input} onChange={setDate} value={value} />

        {optionsReady ?
          <Select options={options} onChange={(data) => setItemId(data.value)} />
          : null
        }

        <button onClick={() => submitReservationToStore} className={styles.input} type="submit">Reserve Item</button>

      </form>
    </div>
  );
}

export default NewReservation;
