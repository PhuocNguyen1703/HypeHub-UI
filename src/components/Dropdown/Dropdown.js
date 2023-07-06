import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Dropdown.module.scss';

const cx = classNames.bind(styles);

function Dropdown({ isShowDropdown, setShowDropdown, options = [], onChange, wrapperClass = '' }) {
    const dropdownRef = useRef(null);

    //handleClick out side
    useEffect(() => {
        document.addEventListener('click', hideOnClickOutside, true);
    }, [isShowDropdown]);

    // Hide on outside click
    const hideOnClickOutside = (e) => {
        if (isShowDropdown) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowDropdown(false);
            }
        }
    };

    const handleSelectOption = (option) => {
        onChange(option);
    };

    if (isShowDropdown) {
        return (
            <div ref={dropdownRef} className={cx('wrapper', wrapperClass)}>
                {!Array.isArray(options) || !options.length ? (
                    <span className={cx('option')}>No data</span>
                ) : (
                    options.map((option, idx) => (
                        <span key={idx} className={cx('option')} onClick={() => handleSelectOption(option)}>
                            {option}
                        </span>
                    ))
                )}
            </div>
        );
    }
}

export default Dropdown;
