import classNames from 'classnames/bind';
import Icon from '~/components/Icon/Icon';

import styles from './MenuItem.module.scss';

const cx = classNames.bind(styles);

const MenuItem = ({ item, onAction }) => {
  return (
    <div className={cx('item')}>
      <div className={cx('item-title')}>
        {item?.icon && <Icon icon={item.icon} size="2rem" />}
        <span className={cx('title')}>{item.title}</span>
      </div>
      <div className={cx('child-list')}>
        {item.children.map((child, index) => (
          <span key={index} className={cx('child-item')} onClick={() => onAction(child.title.toLowerCase())}>
            {child?.icon && <Icon icon={child?.icon} size="1.8rem" />}
            <span className={cx('title')}>{child.title}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
