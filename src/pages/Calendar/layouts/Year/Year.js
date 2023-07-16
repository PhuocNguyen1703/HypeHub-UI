import React from 'react';
import classNames from 'classnames/bind';

import styles from './Year.module.scss';
import SmallCalendar from './SmallCalendar';

const cx = classNames.bind(styles);

function Year() {
    const year = 2023;
    const monthIdxArr = Array.from({ length: 12 }, (x, i) => {
        const monthIdx = i;
        return monthIdx;
    });

    return (
        <div className={cx('wrapper')}>
            {monthIdxArr.map((monthIdx, idx) => (
                <div key={idx} className={cx('calendar')}>
                    <SmallCalendar monthIdx={monthIdx} year={year} />
                </div>
            ))}
        </div>
    );
}

export default Year;
