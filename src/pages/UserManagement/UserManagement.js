import React from 'react';
import classNames from 'classnames/bind';

import styles from './UserManagement.module.scss';
import Table from '~/components/Table';
import Image from '~/components/Image';
import { BsFileEarmarkText, BsPencil, BsTrash } from 'react-icons/bs';

const cx = classNames.bind(styles);

function UserManagement() {
    const userTableHead = [
        'Avatar',
        'Full name',
        'Email',
        'Birth',
        'Gender',
        'Hashtag',
        'Address',
        'Position',
        'Phone',
        'FaceId',
        'CreatedAt',
        'UpdatedAt',
        'Action',
    ];

    const userList = [
        {
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
    ];

    const renderHead = (item, idx) => {
        return <th key={idx}>{item}</th>;
    };

    const renderBody = (item, idx) => {
        return (
            <tr key={idx}>
                <td>
                    <Image src={item.avatar} alt="avatar" className={cx('avatar')} />
                </td>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.birth}</td>
                <td>{item.gender}</td>
                <td>{item.hashtag}</td>
                <td>{item.streetAddress}</td>
                <td>{item.position}</td>
                <td>{item.phone}</td>
                <td>{item.faceId}</td>
                <td>{item.createdAt}</td>
                <td>{item.updatedAt}</td>
                <td>
                    <button className={cx('icon-info')}>
                        <BsFileEarmarkText />
                    </button>
                    <button className={cx('icon-edit')}>
                        <BsPencil />
                    </button>
                    <button className={cx('icon-delete')}>
                        <BsTrash />
                    </button>
                </td>
            </tr>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <Table
                limit="5"
                headData={userTableHead}
                renderHead={(item, idx) => renderHead(item, idx)}
                bodyData={userList}
                renderBody={(item, idx) => renderBody(item, idx)}
            />
        </div>
    );
}

export default UserManagement;
