import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, leftIcon, children, onClick, ...passProps }) {
    let Comp = 'button';
    const props = { onClick, ...passProps };

    if (to) {
        props.to = to;
        Comp = Link;
    }
    if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {});

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    to: , 
    href: , 
    leftIcon: , 
    children: , 
    onClick: };

export default Button;
