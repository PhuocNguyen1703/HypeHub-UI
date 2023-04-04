import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './UserTable.module.scss';
import Image from '~/components/Image';
import {
    BsCaretLeftFill,
    BsCaretRightFill,
    BsClipboardMinus,
    BsFileEarmarkText,
    BsFillCaretDownFill,
    BsGenderFemale,
    BsGenderMale,
    BsPencil,
    BsTrash,
} from 'react-icons/bs';
import { FaCheck, FaMars, FaVenus } from 'react-icons/fa';

const cx = classNames.bind(styles);

function UserTable() {
    const [isOpenOption, setIsOpenOption] = useState(false);
    const [showConfirmTicketModal, setShowConfirmTicketModal] = useState(false);
    const [ticket, setTicket] = useState({});
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

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('heading')}>User Management</span>
            </header>
            <div className={cx('table')}>
                <div className={cx('table-head')}>
                    <span className={cx('identify')}>ID</span>
                    <span className={cx('name')}>Name</span>
                    <span className={cx('email')}>Email</span>
                    <span className={cx('birth')}>Birth</span>
                    <span className={cx('gender')}>Gender</span>
                    <span className={cx('address')}>Address</span>
                    <span className={cx('position')}>Position</span>
                    <span className={cx('phone')}>Phone</span>
                    <span className={cx('face-id')}>FaceId</span>
                    <span className={cx('created-at')}>CreatedAt</span>
                    <span className={cx('action')}>Action</span>
                </div>
                {userList.map((item) => (
                    <div key={item.id} className={cx('table-row')}>
                        <span className={cx('identify')}>{item.id}</span>
                        <span className={cx('name')}>
                            <Image className={cx('avatar')} src={item.avatar} alt="avatar" />
                            <span className={cx('full-name')}>{item.fullName}</span>
                        </span>
                        <span className={cx('email')}>{item.email}</span>
                        <span className={cx('birth')}>{item.birth}</span>
                        <span className={cx('gender')}>{checkGender(item.gender)}</span>
                        <span className={cx('address')}>{item.streetAddress}</span>
                        <span className={cx('position')}>{item.position}</span>
                        <span className={cx('phone')}>{item.phone}</span>
                        <span className={cx('face-id')}>{checkFaceId(item.faceId)}</span>
                        <span className={cx('created-at')}>{item.createdAt}</span>
                        <div className={cx('action')}>
                            <button className={cx('detail-icon')}>
                                <BsClipboardMinus />
                            </button>
                            <button className={cx('remove-icon')}>
                                <BsTrash />
                            </button>
                        </div>
                    </div>
                ))}
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
            </div>
        </div>
    );
}

export default UserTable;
