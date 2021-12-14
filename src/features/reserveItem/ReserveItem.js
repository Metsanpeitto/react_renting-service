/* eslint-disable */
import React from "react";
import DateTimePicker from 'react-datetime-picker';
import Select from 'react-select';

function ReserveItem() {
  return (
    <div>
      <h2>RESERVE ITEM</h2>
      
      <form>

        <input
          placeholder="City"
          type="text"
        />

        <DateTimePicker />

        <Select />

        <input type="submit" value="Reserve Item" />

      </form>
    </div>
  );
}

export default ReserveItem;
