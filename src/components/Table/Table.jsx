import classNames from 'classnames/bind';
import { useMemo, useState } from 'react';

import { FaAngleRight } from 'react-icons/fa';
import Dropdown from '../Dropdown/Dropdown';
import Pagination from './Pagination/Pagination';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

function Table({ bodyData, headData, renderHead, renderBody }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [showDropdown, setShowDropdown] = useState(false);
    const [pageSize, setPageSize] = useState(10);

    const pageSizeOptions = [5, 10];

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return bodyData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, pageSize]);

    const handleToggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };

    const handleSelectOption = (option) => {
        setPageSize(option);
        setShowDropdown(false);
    };

    return (
        <div className={cx('wrapper')}>
            <table className={cx('table')}>
                {headData && renderHead ? (
                    <thead>
                        <tr>{headData.map((item, idx) => renderHead(item, idx))}</tr>
                    </thead>
                ) : null}

                {bodyData && renderBody ? (
                    <tbody>{currentTableData.map((item, idx) => renderBody(item, idx))}</tbody>
                ) : null}
            </table>
            <div className={cx('pagination')}>
                <div className={cx('page-size')}>
                    <span
                        className={cx('size-option', showDropdown && 'toggle-dropdown')}
                        onClick={handleToggleDropdown}
                    >
                        {pageSize} / page
                        <span className={cx('icon-dropdown')}>
                            <FaAngleRight />
                        </span>
                    </span>
                    <Dropdown
                        isShowDropdown={showDropdown}
                        setShowDropdown={setShowDropdown}
                        options={pageSizeOptions}
                        onChange={handleSelectOption}
                    />
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalCount={bodyData.length}
                    pageSize={pageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </div>
    );
}

export default Table;
