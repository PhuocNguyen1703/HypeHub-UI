import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './MenuItem.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, leftIcon, rightIcon }) {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            <span className={cx('icon')}>{leftIcon}</span>
            <span className={cx('title')}>{title}</span>
            <span className={cx('right-icon')}>{rightIcon}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node,
};

export default MenuItem;
