/* eslint-disable */
import React from "react";
import DateTimePicker from 'react-datetime-picker';
import Select from 'react-select';
import styles from './ReserveItem.module.scss';

function ReserveItem() {
  return (
    <div className={styles.container}>
      <h2>RESERVE ITEM</h2>

      <form>

        <input
          placeholder="City"
          type="text"
          className={styles.input}
        />

        <DateTimePicker className={`${styles.input} ${styles.data}`} />

        <Select />

        <input className={styles.input} type="submit" value="Reserve Item" />

      </form>
    </div>
  );
}

export default ReserveItem;
