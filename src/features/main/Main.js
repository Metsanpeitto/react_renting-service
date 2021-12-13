import Carousel from './carousel/Carousel';
import styles from './Main.module.scss';

const Main = () => (
  <div className={styles.main}>
    <h1>LATEST MODELS</h1>
    <p>Please select a model</p>
    <Carousel />
  </div>
);

export default Main;
