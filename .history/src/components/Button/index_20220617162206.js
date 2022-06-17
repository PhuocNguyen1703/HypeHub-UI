import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, onclick, leftIcon }) {
    let Comp = 'button';

    return (
        <Comp>
            <span>{leftIcon}</span>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
