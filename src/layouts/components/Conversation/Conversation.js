import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Conversation.module.scss';
import { getUser } from '~/api/userApi';
import Image from '~/components/Image';

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
            <Image src={userData?.avatar} alt="avatar" className={cx('avatar')} />
            <div className={cx('info')}>
                <span className={cx('name')}>{userData?.fullName}</span>
                <p>{userData?.position}</p>
            </div>
        </>
    );
}

export default Conversation;
