import classNames from 'classnames/bind';

import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '~/layouts/components/Header/Header';
import Sidebar from '~/layouts/components/Sidebar/Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout() {
  const { sidebarCollapsed } = useSelector((state) => state.layout);
  const { themeMode, sidebarColor, navbarColor } = useSelector((state) => state.theme);

  return (
    <div className={cx('wrapper', themeMode)}>
      <div className={cx('header', navbarColor)}>
        <Header />
      </div>
      <AnimatePresence>
        <div className={cx('container')}>
          <motion.div
            className={cx('sidebar', sidebarColor)}
            animate={{
              width: sidebarCollapsed ? '60px' : '200px',
              transition: {
                type: 'spring',
                damping: 16,
                duration: 1,
              },
            }}
          >
            <Sidebar />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            className={cx('content')}
          >
            <Outlet />
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default DefaultLayout;
