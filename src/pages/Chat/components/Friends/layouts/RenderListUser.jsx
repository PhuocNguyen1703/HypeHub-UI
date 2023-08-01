import React from 'react';
import classNames from 'classnames/bind';

import styles from './RenderListUser.module.scss';
import Image from '~/components/Image/Image';
import { FaCommentDots } from 'react-icons/fa';
import { BsFillTrashFill, BsRecord2Fill } from 'react-icons/bs';

const cx = classNames.bind(styles);

function RenderListUser({ userList }) {
    return (
        <div className={cx('wrapper')}>
            {userList.map((user, idx) => (
                <div key={user.id} className={cx('user')}>
                    <div className={cx('info')}>
                        <div className={cx('avatar')}>
                            <Image className={cx('photo')} src={user.avatar} alt="avatar" />
                            <span className={cx('icon-dot')} style={{ color: user.status ? 'green' : '' }}>
                                <BsRecord2Fill />
                            </span>
                        </div>
                        <div className={cx('user-name')}>
                            <span className={cx('name')}>{user.name}</span>
                            <span className={cx('status')}>Online</span>
                        </div>
                    </div>
                    <div className={cx('action-btn')}>
                        <button className={cx('message-btn')}>
                            <FaCommentDots />
                        </button>
                        <button className={cx('remove-btn')}>
                            <BsFillTrashFill />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RenderListUser;
