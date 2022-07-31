import React from 'react';
import classNames from 'classnames/bind';

import styles from './ViewItemPerPage.module.scss';

const cx = classNames.bind(styles);

function ViewItemPerPage({ onChange }) {
    const handleChange = (e) => {
        onChange(e.target.value);
    };
    
    return (
        <form className={cx('wrapper')}>
            <span>View</span>
            <select onChange={handleChange}>
                <option value={12}>12</option>
                <option value={10}>10</option>
                <option value={6}>6</option>
            </select>
            <span>Users per page</span>
        </form>
    );
}

export default ViewItemPerPage;
