/* eslint-disable */
import styles from './Main.module.scss';
import ItemCard from '../../common/components/ItemCard/ItemCard';

import Carousel from '../carousel/Carousel';

const Main = () => {
  return (
    <div className={styles.main}>
      <h1>LATEST MODELS</h1>
      <p>Please select a model</p>
      <Carousel className={styles.carousel}/>
    </div>
  )
};

export default Main;