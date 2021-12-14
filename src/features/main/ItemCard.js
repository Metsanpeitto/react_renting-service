import PropTypes from 'prop-types';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './ItemCard.module.scss';

const ItemCard = ({ item }) => (
  <div className={styles['item-card']}>

    <div className={styles['div-img']} style={{ backgroundColor: item.color }}>
      <img alt="item" src={item.image} />
    </div>

    <h2>{ item.name }</h2>

    <div className={styles.divider} />

    <p>{ item.description }</p>

    <div className={styles.social}>
      <a href="https://facebook.com" aria-label="facebook"><FacebookRoundedIcon /></a>
      <a href="https://twitter.com" aria-label="twitter"><TwitterIcon /></a>
      <a href="https://instagram.com" aria-label="instagram"><InstagramIcon /></a>
    </div>

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
