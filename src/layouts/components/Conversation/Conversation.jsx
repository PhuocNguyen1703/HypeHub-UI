import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Conversation.module.scss';
import { getUser } from '~/services/userApi';
import Image from '~/components/Image';
import { getMessages } from '~/services/messageApi';

const cx = classNames.bind(styles);

function Conversation({ data, currentUserId, chatId, online }) {
    const [userData, setUserData] = useState(null);
    const [lastMessage, setLastMessage] = useState();

    useEffect(() => {
        const MessagesData = async () => {
            try {
                const { data } = await getMessages(chatId);
                setLastMessage(data[data.length - 1]);
            } catch (error) {
                console.log(error);
            }
        };
        if (data !== null) MessagesData();
    }, []);

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <div className={cx('user-avatar')}>
                    <Image src={userData?.avatar} alt="avatar" className={cx('avatar')} />
                    <span className={cx('dot-online')}></span>
                </div>
                <div>
                    <span className={cx('name')}>{userData?.fullName}</span>
                    <p className={cx('preview-message')}>{lastMessage?.content}</p>
                </div>
            </div>
        </div>
    );
}

export default Conversation;
