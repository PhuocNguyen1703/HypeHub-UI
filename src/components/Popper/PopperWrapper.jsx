import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function PopperWrapper({ children }) {
  return <div className={cx('wrapper')}>{children}</div>;
}

PopperWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PopperWrapper;
