import React from 'react';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import styles from './Confirm.module.scss';
import Card from '../Card';

const cx = classNames.bind(styles);

function Confirm() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className={cx('wrapper')}
        >
            <Card layout="confirm" />
            <Card layout="confirm" />
        </motion.div>
    );
}

export default Confirm;
