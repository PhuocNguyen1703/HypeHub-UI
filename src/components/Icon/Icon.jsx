import classNames from 'classnames/bind';
import styles from './Icon.module.scss';

const cx = classNames.bind(styles);

const Icon = ({ icon, className, size }) => {
  return (
    <div style={{ fontSize: size }} className={cx('icon', className)}>
      {icon}
    </div>
  );
};

export default Icon;
