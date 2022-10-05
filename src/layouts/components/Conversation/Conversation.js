import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Conversation.module.scss';
import { getUser } from '~/api/userApi';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Conversation({ data, currentUserId, online }) {
    const [userData, setUserData] = useState(null);

    // useEffect(() => {
    //     const userId = data.members.find((id) => id !== currentUserId);
    //     const getUserData = async () => {
    //         try {
    //             const { data } = await getUser(userId);
    //             setUserData(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };

    //     getUserData();
    // }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <div className={cx('user-avatar')}>
                    <Image src={data?.avatar} alt="avatar" className={cx('avatar')} />
                    <span className={cx('dot-online')}></span>
                </div>
                <div>
                    <span className={cx('name')}>{data?.fullName}</span>
                    <p className={cx('preview-message')}>{data?.message}</p>
                </div>
            </div>
            <span className={cx('time')}>a few ago</span>
        </div>
    );
}

export default Conversation;
