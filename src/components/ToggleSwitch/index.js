import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './ToggleSwitch.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSidebarCollapsed } from '~/redux/Slice/layoutSlice';

const cx = classNames.bind(styles);

function ToggleSwitch({ item }) {
    const { sidebarCollapsed } = useSelector((state) => state.layout);
    const [sidebarLayout, setSidebarLayout] = useState(sidebarCollapsed);
    const dispatch = useDispatch();

    const handleToggle = () => {
        setSidebarLayout(!sidebarLayout);
        dispatch(setSidebarCollapsed(!sidebarLayout));
    };

    return (
        <div className={cx('toggle-switch')}>
            <label htmlFor={item.id} className={cx('label')}>
                {item.name}
                <input
                    id={item.id}
                    type="checkbox"
                    className={cx('checkbox')}
                    name="toggleSwitch"
                    checked={sidebarCollapsed}
                    onClick={handleToggle}
                    readOnly
                />
            </label>
        </div>
    );
}

export default ToggleSwitch;
