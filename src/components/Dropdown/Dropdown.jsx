import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Dropdown.module.scss';
import Icon from '../Icon/Icon';

const cx = classNames.bind(styles);

function Dropdown({
  dropdownRef = useRef(null),
  isShowDropdown,
  setShowDropdown,
  options = [],
  onChange,
  wrapperClass = '',
}) {
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
          options.map((option) => (
            <div key={option.id} className={cx('option')} onClick={() => handleSelectOption(option.title)}>
              {option?.leftIcon && <Icon icon={option.leftIcon} className={cx('icon')} />}
              <span className={cx('title')}>{option.title}</span>
              {option?.rightIcon && <Icon icon={option.rightIcon} className={cx('icon')} />}
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Dropdown;
