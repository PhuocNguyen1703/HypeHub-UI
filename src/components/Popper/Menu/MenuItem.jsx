import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Button from '~/components/Button/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, className, onClick }) {
  return (
    <Button
      className={cx('menu-item', className, { separate: data.separate })}
      leftIcon={data.icon}
      colorLeftIcon={data.colorLeftIcon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MenuItem;
