import PropTypes from 'prop-types';

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style, display: 'block', background: '#97bf0f', padding: '10px 20px 10px 10px', width: 'auto', height: 'auto', right: '0', zIndex: '1', borderTopLeftRadius: '50%', borderBottomLeftRadius: '50%', border: '1px solid #97bf0f',
    }}
    onClick={onClick}
    onKeyDown={onClick}
    role="button"
    aria-label="Next arrow"
    tabIndex={0}
  />
);

export default NextArrow;

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.func,
};

NextArrow.defaultProps = {
  className: '',
  style: '',
  onClick: () => {},
};
