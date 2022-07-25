import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Conversation.module.scss';
import { getUser } from '~/api/userApi';

const cx = classNames.bind(styles);

function Conversation({ data, currentUserId, online }) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const userId = data.members.find((id) => id !== currentUserId);
        const getUserData = async () => {
            try {
                const { data } = await getUser(userId);
                setUserData(data);
            } catch (error) {
                console.log(error);
            }
        };

        getUserData();
    }, []);

    return (
        <>
            <div className={cx('item-avatar')}>
                <img src={userData?.avatar} alt="avatar" />
                {online && <span></span>}
            </div>
            <div className={cx('item-info')}>
                <h2>{userData?.fullName}</h2>
                <span>{userData?.position}</span>
            </div>
        </>
    );
}

export default Conversation;
