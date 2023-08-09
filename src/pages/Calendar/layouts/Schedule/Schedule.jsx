import classNames from 'classnames/bind';

import { FaRecordVinyl } from 'react-icons/fa';
import styles from './Schedule.module.scss';

const cx = classNames.bind(styles);

function Schedule() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('schedule-container')}>
                <span className={cx('left')}>
                    <span className={cx('date')}>16</span> jun, sun
                </span>
                <div className={cx('right')}>
                    <div className={cx('item')}>
                        <span className={cx('icon-dot')}>
                            <FaRecordVinyl />
                        </span>
                        <span className={cx('time')}>4am - 5am</span>
                        <span className={cx('title')}>title</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Schedule;
