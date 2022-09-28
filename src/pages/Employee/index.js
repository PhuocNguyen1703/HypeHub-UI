import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Employee.module.scss';
import Image from '~/components/Image';
import Pagination from '~/components/Pagination/Pagination';
import { getAllUser } from '~/api/userApi';
import Loading from '~/components/Loading/Loading';
import ViewItemPerPage from '~/components/ViewItemPerPage/ViewItemPerPage';
import EmployeeHeader from '~/layouts/components/EmployeeHeader/EmployeeHeader';
import { IoCallOutline, IoEllipsisVertical, IoMailOutline } from 'react-icons/io5';

const cx = classNames.bind(styles);

function Employee() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(12);

    // useEffect(() => {
    //     setLoading(true);
    //     try {
    //         const getAllUsers = async () => {
    //             const res = await getAllUser();
    //             setUsers(res.data);
    //             setLoading(false);
    //         };
    //         getAllUsers();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, []);

    //Get current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsersPage = users.slice(indexOfFirstUser, indexOfLastUser);

    const handleChangeView = (onChange) => {
        setUsersPerPage(onChange);
    };

    const handlePrev = (prevPage) => {
        setCurrentPage(prevPage);
    };

    const handleChangePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNext = (nextPage) => {
        setCurrentPage(nextPage);
    };

    return (
        <div className={cx('wrapper')}>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <div className={cx('header')}>
                        <EmployeeHeader totalUsers={users.length} />
                    </div>
                    <div className={cx('container')}>
                        {loading ? (
                            <Loading />
                        ) : (
                            <div className={cx('employee-list')}>
                                {currentUsersPage.map((user) => (
                                    <div key={user._id} className={cx('employee-item')}>
                                        <div className={cx('item-header')}>
                                            <span className={cx('status')}>Active</span>
                                            <IoEllipsisVertical />
                                        </div>
                                        <div className={cx('info')}>
                                            <Image src={user.avatar} alt="avatar" className={cx('avatar')} />
                                            <span className={cx('name')}>{user.fullName}</span>
                                            <span className={cx('position')}>{user.position}</span>
                                        </div>
                                        <div className={cx('desc')}>
                                            <div className={cx('desc-top')}>
                                                <div className={cx('department')}>
                                                    <span className={cx('title')}>Department</span>
                                                    <span>Design Team</span>
                                                </div>
                                                <div className={cx('hired-date')}>
                                                    <span className={cx('title')}>Date Hired</span>
                                                    <span>17/03/2020</span>
                                                </div>
                                            </div>
                                            <div className={cx('contact')}>
                                                <span className={cx('email')}>
                                                    <IoMailOutline />
                                                    {user.email}
                                                </span>
                                                <span className={cx('phone')}>
                                                    <IoCallOutline />
                                                    {user.phone}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className={cx('paginate')}>
                        <ViewItemPerPage onChange={handleChangeView} />
                        <Pagination
                            currentPage={currentPage}
                            usersPerPage={usersPerPage}
                            totalUsers={users.length}
                            prevPage={handlePrev}
                            paginate={handleChangePage}
                            nextPage={handleNext}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default Employee;
