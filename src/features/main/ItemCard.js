import PropTypes from 'prop-types';
import styles from './ItemCard.module.scss';

const ItemCard = ({ item }) => (
  <div className={styles['item-card']}>

    <div className={styles['div-img']} style={{ backgroundColor: item.color }}>
      <img alt="item" src={item.image} />
    </div>

    <h2>{ item.name }</h2>

    <div className={styles.divider} />

    <p>{ item.description }</p>

  </div>
);

export default ItemCard;

ItemCard.propTypes = {
  item: PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    },
  ).isRequired,
};
