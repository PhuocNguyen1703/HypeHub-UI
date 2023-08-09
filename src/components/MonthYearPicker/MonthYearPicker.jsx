import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import dayjs from 'dayjs';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import styles from './MonthYearPicker.module.scss';

const cx = classNames.bind(styles);

function MonthYearPicker({ showMonthYearPicker, isHide, onChange, className }) {
    const [year, setYear] = useState(new Date().getFullYear());
    const dropdownRef = useRef(null);

    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    //handleClick out side
    useEffect(() => {
        document.addEventListener('click', hideOnClickOutside, true);
    }, [showMonthYearPicker]);

    // Hide on outside click
    const hideOnClickOutside = (e) => {
        if (showMonthYearPicker) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setYear(new Date().getFullYear());
                isHide(false);
            }
        }
    };

    const handlePrevYear = () => {
        setYear((currentYear) => currentYear - 1);
    };
    const handleNextYear = () => {
        setYear((currentYear) => currentYear + 1);
    };

    const handleSelectMonth = (month) => {
        const selected = dayjs(`${month}${year}`).format('MM/YYYY');
        onChange(selected);
        setYear(new Date().getFullYear());
        isHide(false);
    };

    if (showMonthYearPicker) {
        return (
            <div ref={dropdownRef} className={cx('wrapper')}>
                <header className={cx('header')}>
                    <span className={cx('icon-prev')} onClick={handlePrevYear}>
                        <FaAngleLeft />
                    </span>
                    {year}
                    <span className={cx('icon-next')} onClick={handleNextYear}>
                        <FaAngleRight />
                    </span>
                </header>
                <div className={cx('month-list')}>
                    {monthArr.map((month, idx) => (
                        <span key={idx} className={cx('month')} onClick={() => handleSelectMonth(month)}>
                            {month}
                        </span>
                    ))}
                </div>
            </div>
        );
    }
}

export default MonthYearPicker;
