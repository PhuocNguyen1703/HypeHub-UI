import classNames from 'classnames/bind';

import SmallCalendar from './SmallCalendar';
import styles from './Year.module.scss';

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
