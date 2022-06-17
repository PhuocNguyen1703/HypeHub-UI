import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, onClick}) {
    let Comp = 'button';

    const classes = 

    return (
        <Comp>
            <span>{leftIcon}</span>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
