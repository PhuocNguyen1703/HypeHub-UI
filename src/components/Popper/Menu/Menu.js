import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import ViewProfile from './ViewProfile';

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange, viewProfile = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const currentMenu = history[history.length - 1];

    const renderItems = () => {
        return currentMenu.data.map((item, index) => {
            const isParent = !!item.children;

            const handleClick = () => {
                if (isParent) {
                    setHistory((prev) => [...prev, item.children]);
                } else {
                    onChange(item);
                }
            };

            return <MenuItem key={index} data={item} onClick={handleClick} />;
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                {viewProfile &&
                    (history.length > 1 ? <Header title={currentMenu.title} onBack={handleBack} /> : <ViewProfile />)}
                {renderItems()}
            </PopperWrapper>
        </div>
    );

    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        // Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            <Tippy
                interactive
                delay={[0, 400]}
                offset={[2, 8]}
                hideOnClick
                placement="bottom-end"
                onHide={handleResetMenu}
                render={renderResult}
            >
                {children}
            </Tippy>
        </div>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    hideOnClick: PropTypes.bool,
};

export default Menu;
