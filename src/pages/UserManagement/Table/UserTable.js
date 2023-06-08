import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './UserTable.module.scss';
import Image from '~/components/Image';
import {
    BsCaretLeftFill,
    BsCaretRightFill,
    BsClipboardMinus,
    BsCloudUpload,
    BsDownload,
    BsFillCaretDownFill,
    BsPersonPlus,
    BsPrinter,
    BsTrash,
} from 'react-icons/bs';
import { FaCheck, FaMars, FaSort, FaVenus } from 'react-icons/fa';
import UserDetail from '~/components/Modal/UserDetail/UserDetail';
import Table from '~/components/Table/Table';
import Search from '~/components/Search/Message/Message';

const cx = classNames.bind(styles);

function UserTable() {
    const [isOpenOption, setIsOpenOption] = useState(false);
    const [showUserDetailModal, setShowUserDetailModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const optionRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', hideOnClickOutside, true);
    }, []);

    // Hide on outside click
    const hideOnClickOutside = (e) => {
        // if (optionRef.current && !optionRef.current.contains(e.target)) {
        //     setIsOpenOption(false);
        // }
        setIsOpenOption(false);
    };

    const handleToggleOption = () => {
        setIsOpenOption(true);
    };

    const userTableHead = [
        'iD',
        'avatar',
        'name',
        'email',
        'birth',
        'gender',
        'address',
        'position',
        'phone',
        'faceId',
        'createdAt',
        'action',
    ];

    const userData = [
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
            id: 'M#110809589',
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
            id: 'M#122256789',
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
        return (
            <th key={idx} className={cx(setTextCenter(item))}>
                <span className={cx('head-title')}>
                    {item}
                    {checkShowSortIcon(item)}
                </span>
            </th>
        );
    };

    const renderBody = (item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.id}</td>
                <td className={cx('avatar-field')}>
                    <Image src={item.avatar} alt="avatar" className={cx('avatar')} />
                </td>
                <td className={cx('name-field')}>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.birth}</td>
                <td className={cx('gender-field')}>{checkGender(item.gender)}</td>
                <td>{item.streetAddress}</td>
                <td>{item.position}</td>
                <td>{item.phone}</td>
                <td className={cx('face-id-field')}>{checkFaceId(item.faceId)}</td>
                <td>{item.createdAt}</td>
                <td className={cx('action-field')}>
                    <button className={cx('detail-icon')} onClick={() => handleToggleUserDetailModal(item)}>
                        <BsClipboardMinus />
                    </button>
                    <button className={cx('remove-icon')}>
                        <BsTrash />
                    </button>
                </td>
            </tr>
        );
    };

    const setTextCenter = (headTitle) => {
        if (headTitle === 'avatar' || headTitle === 'gender' || headTitle === 'faceId' || headTitle === 'action')
            return 'text-center';
    };

    const checkShowSortIcon = (headTitle) => {
        if (
            headTitle === 'iD' ||
            headTitle === 'name' ||
            headTitle === 'email' ||
            headTitle === 'birth' ||
            headTitle === 'createdAt'
        )
            return (
                <span className={cx('icon-sort')}>
                    <FaSort />
                </span>
            );
    };

    const checkGender = (gender) => {
        if (gender === 'female')
            return (
                <span className={cx('female-icon')}>
                    <FaVenus />
                </span>
            );

        if (gender === 'male')
            return (
                <span className={cx('male-icon')}>
                    <FaMars />
                </span>
            );

        return null;
    };

    const checkFaceId = (faceId) => {
        if (faceId)
            return (
                <span className={cx('check-icon')}>
                    <FaCheck />
                </span>
            );

        return null;
    };

    const handleToggleUserDetailModal = (item) => {
        setSelectedUser(item);
        setShowUserDetailModal(true);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header-table')}>
                <button className={cx('add-new-user-btn')}>
                    <span className={cx('icon-person')}>
                        <BsPersonPlus />
                    </span>
                    Add User
                </button>
                <button className={cx('filter-male-btn')}>
                    <span className={cx('icon-male')}>
                        <FaMars />
                    </span>
                    Male
                </button>
                <button className={cx('filter-female-btn')}>
                    <span className={cx('icon-female')}>
                        <FaVenus />
                    </span>
                    Female
                </button>
                <button className={cx('import-btn')}>
                    <span className={cx('icon-import')}>
                        <BsCloudUpload />
                    </span>
                    Import
                </button>
                <button className={cx('export-btn')}>
                    <span className={cx('icon-export')}>
                        <BsDownload />
                    </span>
                    Export
                </button>
                <button className={cx('print-btn')}>
                    <span className={cx('icon-print')}>
                        <BsPrinter />
                    </span>
                    Print
                </button>
                <div className={cx('search')}>
                    <Search />
                </div>
            </header>
            <Table
                limit={10}
                headData={userTableHead}
                renderHead={renderHead}
                bodyData={userData}
                renderBody={renderBody}
            />
            <div className={cx('pagination')}>
                <div className={cx('pagination-left')}>
                    <div className={cx('select')}>
                        <span className={cx('selected')} onClick={handleToggleOption}>
                            10
                            <span className={cx('dropdown-icon')}>
                                <BsFillCaretDownFill />
                            </span>
                        </span>
                        <span className={cx('text-per-page')}>Entries per page</span>
                        {isOpenOption && (
                            <ul ref={optionRef} className={cx('option')}>
                                <li className={cx('select-option')}>10</li>
                                <li className={cx('select-option')}>15</li>
                                <li className={cx('select-option')}>20</li>
                            </ul>
                        )}
                    </div>
                </div>

                <div className={cx('pagination-right')}>
                    <button className={cx('prev-btn')}>
                        <BsCaretLeftFill />
                    </button>
                    <div className={cx('page')}>
                        Page
                        <span className={cx('number')}>1</span>
                        of 12
                    </div>
                    <button className={cx('next-btn')}>
                        <BsCaretRightFill />
                    </button>
                </div>
            </div>

            <UserDetail
                show={showUserDetailModal}
                setShowUserDetailModal={setShowUserDetailModal}
                user={selectedUser}
            />
        </div>
    );
}

export default UserTable;
