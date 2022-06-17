import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, onClick }) {
    let Comp = 'button';

    const classes = cx('wrapper');

    return (
        <Comp className={}>
            <span>{leftIcon}</span>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
