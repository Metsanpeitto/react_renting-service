/* eslint-disable */

import Carousel from "./Carousel";
import styles from './Main.module.scss';


const Main = () => {
  return (
    <div className={styles.main}>
      <h1>LATEST MODELS</h1>  
      <p>Please select a model</p>
      <Carousel />
    </div>
  )
};

export default Main;