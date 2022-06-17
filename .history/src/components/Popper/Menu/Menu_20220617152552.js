import React, { Children } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Menu({ Children }) {
    return (
        <Tippy
            interactive
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                      <h2>menu</h2>
                    </PopperWrapper>
                </div>
            )}
        >
            {Children}
        </Tippy>
    );
}

export default Menu;
