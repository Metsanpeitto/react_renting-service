import PropTypes from 'prop-types';

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style, display: 'block', background: '#97bf0f', padding: '10px 10px 10px 20px', width: 'auto', height: 'auto', left: '0', zIndex: '1', borderTopRightRadius: '50%', borderBottomRightRadius: '50%', border: '1px solid #97bf0f',
    }}
    onClick={onClick}
    onKeyDown={onClick}
    role="button"
    aria-label="Previous arrow"
    tabIndex={0}
  />
);

export default PrevArrow;

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onClick: PropTypes.func,
};

PrevArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => {},
};
