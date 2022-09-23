import React from 'react';
import classNames from 'classnames/bind';

import styles from './Column.module.scss';

const cx = classNames.bind(styles);

function BoardContent({ column }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('column-header')}>{column.title}</header>
            <div className={cx('column-content')}>
                <div className={cx('card')}>
                    <span>Where are you to day?</span>
                </div>
            </div>
        </div>
    );
}

export default BoardContent;
