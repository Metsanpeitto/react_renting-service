/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import DateTimePicker from 'react-datetime-picker'
import { useParams } from "react-router-dom";
import Select from 'react-select'
import { addReservation } from '../redux/api/api';
import { useNavigate } from "react-router-dom";


function NewReservation() {
  const param = useParams();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.itemsReducer.items);
  const [city, setCity] = useState("");
  const [value, setDate] = useState(new Date());
  const [itemId, setItemId] = useState("");
  const [optionsReady, setOptionsReady] = useState(false);
  const options = []
  let navigate = useNavigate();


  const submitReservationToStore = () => {
    const newReservation = {
      itemId,
      city,
      value
    };
    dispatch(addReservation(newReservation));
  };

  useEffect(() => {
    console.log(items)
    console.log(options.length)
    if (items.length > 0 && options.length == 0) {
      items.forEach(item => {
        options.push({ value: item.id, label: `${item.name}` })
        setOptionsReady(true);
      });
    }
    if (itemId == '' && param.itemId) {
      setItemId(param.itemId)
    }
  });

  return (
    <div className="reserve-page">
      <h2 className="adder-header">Create an appointment</h2>
      <div className="add-form">
        <input
          className="adder-title input"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
          type="text"
          name="input-city"
          id="input-city"
        />
        <DateTimePicker onChange={setDate} value={value} />

        {optionsReady ?
          <Select options={options} onChange={(data) => setItemId(data.value)} className="adder-title input" />
          : null
        }
        <button
          className="btn-1"
          type="submit"
          onClick={submitReservationToStore}
        >
          RESERVE
        </button>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    </div>
  );
}

export default NewReservation;
