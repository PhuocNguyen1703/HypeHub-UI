import classNames from 'classnames/bind';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { usePagination } from '~/hooks/usePagination';
import { DOTS } from '~/utils/constants';
import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

function Pagination({ onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className = '' }) {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrev = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <ul className={cx('wrapper', `${className}`)}>
            {/* Left navigation arrow */}
            <li
                className={cx('icon-prev', {
                    disabled: currentPage === 1,
                })}
                onClick={onPrev}
            >
                <FaAngleLeft />
            </li>
            {paginationRange.map((pageNumber, idx) => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return (
                        <li key={idx} className="page-dots">
                            &#8230;
                        </li>
                    );
                }

                // Render our Page Pills
                return (
                    <li
                        key={idx}
                        className={cx('page-number', {
                            selected: pageNumber === currentPage,
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li
                className={cx('icon-next', {
                    disabled: currentPage === lastPage,
                })}
                onClick={onNext}
            >
                <FaAngleRight />
            </li>
        </ul>
    );
}

export default Pagination;
