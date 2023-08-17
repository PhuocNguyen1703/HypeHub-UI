import classNames from 'classnames/bind';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import Icon from '~/components/Icon/Icon';
import styles from './CategoryMenu.module.scss';

const cx = classNames.bind(styles);

const CategoryMenu = ({ item, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: '100%',
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  const handleItemList = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <AnimatePresence>
      <div className={cx('wrapper', isOpen && 'open')} onClick={handleItemList}>
        <motion.span variants={showAnimation} initial="show" animate="show" exit="hidden" className={cx('title')}>
          {item.title}
          <Icon icon={<MdNavigateNext />} className={cx('toggle-btn')} />
        </motion.span>
        <motion.div
          animate={{
            height: isOpen ? 'auto' : '0',
            transition: { duration: 0.4 },
          }}
          className={cx('child-list')}
        >
          {item.children.map((child, index) => (
            <NavLink to={child.path} key={index} className={(nav) => cx('child-item', { active: nav.isActive })}>
              {child.icon && <Icon icon={child.icon} size="1.8rem" />}
              <span className={cx('title')}>{child.title}</span>
            </NavLink>
          ))}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CategoryMenu;
