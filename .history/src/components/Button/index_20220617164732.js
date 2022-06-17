import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href,leftIcon, children, onClick, ...passProps }) {
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

    const classes = cx('wrapper', {

    });

    return (
        <Comp className={classes} {...props}>
          {leftIcon && <span>{</span>}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
