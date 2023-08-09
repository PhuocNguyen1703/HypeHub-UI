import React from 'react';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import styles from './Directory.module.scss';
import Card from '../Card/Card';

const cx = classNames.bind(styles);

function Directory() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className={cx('wrapper')}
        >
            <Card layout="directory" />
            <Card layout="directory" />
            <Card layout="directory" />
        </motion.div>
    );
}

export default Directory;
