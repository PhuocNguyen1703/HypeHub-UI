import React from 'react';
import classNames from 'classnames/bind';
import {Link}
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, children, onClick }) {
    let Comp = 'button';

    const props = {onClick};

    const classes = cx('wrapper');

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
