/* eslint-disable */

import styles from './ItemCard.module.scss';

const ItemCard = ( { item }) => {

  console.log(item);
  return (
  <div className={styles['item-card']}>

    <div className={styles['div-img']}>
      <img alt="item" src={ item.image } />
    </div>

    <h2>{ item.name }</h2>

    <p>{ item.description }</p>

    <div className={styles.social}>
      <img alt="facebook" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />
      <img alt="twitter" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />
      <img alt="instagram" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />
    </div>

  </div>);
};

export default ItemCard;
