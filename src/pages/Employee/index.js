import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Employee.module.scss';
import Pagination from '~/components/Pagination/Pagination';
import Loading from '~/components/Loading/Loading';
import ViewItemPerPage from '~/components/ViewItemPerPage/ViewItemPerPage';
import EmployeeHeader from '~/layouts/components/EmployeeHeader/EmployeeHeader';
import Table from '~/components/Table/Table';
import Image from '~/components/Image/Image';

const cx = classNames.bind(styles);

function Employee() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(12);

    const employeeTableHead = [
        'Id',
        'Avatar',
        'Name',
        'Email',
        'Birth',
        'Gender',
        'Address',
        'Position',
        'Phone',
        'FaceId',
        'CreatedAt',
    ];

    const userList = [
        {
            id: 'M#117956789',
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            fullName: 'Victoria',
            email: 'admin@gmail.com',
            birth: '12/02/1996',
            gender: 'male',
            hashtag: 'We are one !!',
            streetAddress: 'Tokyo',
            position: 'Developer',
            phone: '0345678234',
            faceId: 'asd123asd123asd123asd123asd',
            createdAt: '12/03/2022',
            updatedAt: '14/03/2022',
        },
        {
            id: 'M#161108789',
            avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            fullName: 'Yamamoto',
            email: 'admin2@gmail.com',
            birth: '20/6/2000',
            gender: 'male',
            hashtag: 'Just do it !!',
            streetAddress: 'Japan',
            position: 'Boss',
            phone: '12323242442',
            faceId: 'asd12dfgu12g3hj12hgjhg12',
            createdAt: '10/12/2022',
            updatedAt: '20/01/2023',
        },
        {
            id: 'M#122356789',
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            fullName: null,
            email: 'admin3@gmail.com',
            birth: null,
            gender: 'female',
            hashtag: null,
            streetAddress: null,
            position: 'Designer',
            phone: '1235451231312',
            faceId: 'asd12sdf12df2314f',
            createdAt: '10/12/1998',
            updatedAt: '12/12/1999',
        },
        {
            id: 'M#110856789',
            avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            fullName: 'Tommy',
            email: 'admin4@gmail.com',
            birth: '14/10/2000',
            gender: 'male',
            hashtag: null,
            streetAddress: null,
            position: 'Director',
            phone: '12312313131',
            faceId: '13asd12d12d12d123d12e12',
            createdAt: '12/03/2022',
            updatedAt: null,
        },
        {
            id: 'M#122876789',
            avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            fullName: 'Yuri',
            email: 'admin5@gmail.com',
            birth: null,
            gender: null,
            hashtag: null,
            streetAddress: 'Viet Nam',
            position: 'Developer',
            phone: null,
            faceId: null,
            createdAt: '31/12/2000',
            updatedAt: null,
        },
        {
            id: 'M#113556789',
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            fullName: 'Victoria',
            email: 'admin@gmail.com',
            birth: '12/02/1996',
            gender: 'male',
            hashtag: 'We are one !!',
            streetAddress: 'Tokyo',
            position: 'Developer',
            phone: '0345678234',
            faceId: 'asd123asd123asd123asd123asd',
            createdAt: '12/03/2022',
            updatedAt: '14/03/2022',
        },
        {
            id: 'M#123108789',
            avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            fullName: 'Yamamoto',
            email: 'admin2@gmail.com',
            birth: '20/6/2000',
            gender: 'male',
            hashtag: 'Just do it !!',
            streetAddress: 'Japan',
            position: 'Boss',
            phone: '12323242442',
            faceId: 'asd12dfgu12g3hj12hgjhg12',
            createdAt: '10/12/2022',
            updatedAt: '20/01/2023',
        },
        {
            id: 'M#122303489',
            avatar: 'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            fullName: 'Jery',
            email: 'admin3@gmail.com',
            birth: null,
            gender: 'female',
            hashtag: null,
            streetAddress: null,
            position: 'Designer',
            phone: '1235451231312',
            faceId: 'asd12sdf12df2314f',
            createdAt: '10/12/1998',
            updatedAt: '12/12/1999',
        },
        {
            id: 'M#110809589',
            avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            fullName: 'Tom',
            email: 'admin4@gmail.com',
            birth: '14/10/2000',
            gender: 'male',
            hashtag: null,
            streetAddress: null,
            position: 'Director',
            phone: '12312313131',
            faceId: '13asd12d12d12d123d12e12',
            createdAt: '12/03/2022',
            updatedAt: null,
        },
        {
            id: 'M#122256789',
            avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            fullName: 'Alex',
            email: 'admin5@gmail.com',
            birth: null,
            gender: null,
            hashtag: null,
            streetAddress: 'Viet Nam',
            position: 'Developer',
            phone: null,
            faceId: null,
            createdAt: '31/12/2000',
            updatedAt: null,
        },
    ];

    const renderHead = (item, index) => {
        return <th key={index}>{item}</th>;
    };

    const renderBody = (item, index) => {
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>
                    <Image src={item.avatar} alt="avatar" className={cx('avatar')} />
                </td>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.birth}</td>
                <td>{item.gender}</td>
                <td>{item.streetAddress}</td>
                <td>{item.position}</td>
                <td>{item.phone}</td>
                <td>{item.faceId}</td>
                <td>{item.createdAt}</td>
            </tr>
        );
    };

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
                            <Table
                                limit="5"
                                headData={employeeTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={userList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        )}
                    </div>
                    {/* <div className={cx('paginate')}>
                        <ViewItemPerPage onChange={handleChangeView} />
                        <Pagination
                            currentPage={currentPage}
                            usersPerPage={usersPerPage}
                            totalUsers={users.length}
                            prevPage={handlePrev}
                            paginate={handleChangePage}
                            nextPage={handleNext}
                        />
                    </div> */}
                </>
            )}
        </div>
    );
}

export default Employee;
