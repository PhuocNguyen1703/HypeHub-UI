import classNames from 'classnames/bind';
import styles from './Icon.module.scss';

const cx = classNames.bind(styles);

const Icon = ({ icon, className, size }) => {
  return (
    <span style={{ fontSize: size }} className={cx('icon', className)}>
      {icon}
    </span>
  );
};

export default Icon;
