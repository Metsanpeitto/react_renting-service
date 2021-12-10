/* eslint-disable */
import styles from './Main.module.scss';
import ItemCard from '../../common/components/ItemCard/ItemCard'

const Main = () => {
  return (
    <div className={styles.main}>
      <h1>LATEST MODELS</h1>
      <p>Please select a model</p>
      <div className={styles.carousel}>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  )
};

export default Main;