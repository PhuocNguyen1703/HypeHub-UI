import classNames from 'classnames/bind';

import styles from './Day.module.scss';

const cx = classNames.bind(styles);

function Day() {
    const timeArr = Array.from({ length: 23 }, (x, i) => {
        const time = i + 1;
        return time > 11 ? time + ' PM' : time + ' AM';
    });

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('label')}>
                    <span className={cx('day')}>MON</span>
                    <span className={cx('date')}>6</span>
                </div>
            </header>
            <div className={cx('container')}>
                <div>
                    {timeArr.map((time, idx) => (
                        <div key={idx} className={cx('calendar-time')}>
                            <label className={cx('time')}>{time}</label>
                            <div className={cx('event-container')}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Day;
