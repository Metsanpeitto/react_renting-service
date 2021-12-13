import styles from './ItemCard.module.scss';

const ItemCard = () => (
  <div className={styles['item-card']}>

    <img alt="item" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />

    <h2>Item name</h2>

    <p>Description</p>

    <div className={styles.social}>
      <img alt="facebook" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />
      <img alt="twitter" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />
      <img alt="instagram" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfNMnsU2cUDDcDoi_Uz9Y1v-3_WviVMLM1TrroFFHJtaqiqS2yXFHNNqWHXE_yWUvP6E&usqp=CAU" />
    </div>

  </div>
);

export default ItemCard;
