import React from 'react';
import classNames from 'classnames/bind';

import styles from './Pagination.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Pagination({ currentPage = 1, usersPerPage, totalUsers, prevPage, paginate, nextPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={cx('wrapper')}>
            <ul className={cx('container')}>
                <button
                    className={cx('prev-btn', `${currentPage === 1 && 'opacity'}`)}
                    onClick={() => {
                        if (currentPage === 1) return;
                        prevPage(currentPage - 1);
                    }}
                >
                    <FontAwesomeIcon icon={faAngleLeft} />
                    Prev
                </button>
                {pageNumbers.map((number) => (
                    <li key={number} className={cx('page-number', `${currentPage === number && 'active'}`)}>
                        <button onClick={() => paginate(number)}>{number}</button>
                    </li>
                ))}
                <button
                    className={cx('next-btn', `${currentPage === pageNumbers[pageNumbers.length - 1] && 'opacity'}`)}
                    onClick={() => {
                        if (currentPage === pageNumbers[pageNumbers.length - 1]) return;
                        nextPage(currentPage + 1);
                    }}
                >
                    Next
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </ul>
        </nav>
    );
}

export default Pagination;
