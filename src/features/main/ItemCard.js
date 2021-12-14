/* eslint-disable */

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './ItemCard.module.scss';

const ItemCard = ( { item }) => {

  console.log(item);
  return (
  <div className={styles['item-card']}>

    <div className={styles['div-img']} style={{backgroundColor:item.color}}>
      <img alt="item" src={ item.image } />
    </div>

    <h2>{ item.name }</h2>

    <div className={styles.divider}></div>

    <p>{ item.description }</p>

    <div className={styles.social}>
      <a href="https://facebook.com"><FacebookRoundedIcon /></a>
      <a href="https://twitter.com"><TwitterIcon /></a>
      <a href="https://instagram.com"><InstagramIcon /></a>
    </div>

  </div>);
};

export default ItemCard;
