import React from 'react';
import classNames from 'classnames/bind';

import styles from './ToggleSwitch.module.scss';

const cx = classNames.bind(styles);

function ToggleSwitch({ label, id }) {
    return (
        <div className={cx('toggle-switch')}>
            <label htmlFor={id} className={cx('label')}>
                {label}
                <input id={id} type="checkbox" className={cx('checkbox')} name="toggleSwitch" />
            </label>
        </div>
    );
}

export default ToggleSwitch;
