import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import InputEmoji from 'react-input-emoji';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import config from '~/config';
import images from '~/assets/images';
import styles from './Chat.module.scss';
import { SearchIcon } from '~/components/Icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { userChats } from '~/api/chatApi';

const cx = classNames.bind(styles);

function Chat() {
    const user = useSelector((state) => state.auth.login.currentUser);
    console.log(user);
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const getChats = async () => {
            try {
                const { data } = await userChats(user?._id);
                setChats(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        getChats();
    }, [user]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('left-side-chat')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                    <h1>Logistics</h1>
                </Link>
                <div className={cx('online-now')}>
                    <span className={cx('title')}>Online now</span>
                    <div className={cx('account-online')}>
                        <div className={cx('account-online-item')}>
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                alt="avatar"
                            />
                            <span></span>
                        </div>
                        <div className={cx('account-online-item')}>
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                alt="avatar"
                            />
                            <span></span>
                        </div>
                        <div className={cx('account-online-item')}>
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                alt="avatar"
                            />
                            <span></span>
                        </div>
                        <div className={cx('account-online-item')}>
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                alt="avatar"
                            />
                            <span></span>
                        </div>
                        <div className={cx('account-online-item')}>
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                alt="avatar"
                            />
                            <span></span>
                        </div>
                        <div className={cx('account-online-item')}>
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                alt="avatar"
                            />
                            <span></span>
                        </div>
                        <div className={cx('account-online-item')}>
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                alt="avatar"
                            />
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className={cx('chat-list')}>
                    <span className={cx('title')}>Messages</span>
                    <div className={cx('search-item')}>
                        <input placeholder="search item" />
                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                    <div className={cx('item-list')}>
                        <div className={cx('item')}>
                            <div className={cx('item-avatar')}>
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="avatar"
                                />
                                <span></span>
                            </div>
                            <div className={cx('item-info')}>
                                <h2>Jon week</h2>
                                <span>Customer</span>
                            </div>
                        </div>

                        <div className={cx('item')}>
                            <div className={cx('item-avatar')}>
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="avatar"
                                />
                                <span></span>
                            </div>
                            <div className={cx('item-info')}>
                                <h2>Jon week</h2>
                                <span>Customer</span>
                            </div>
                        </div>

                        <div className={cx('item')}>
                            <div className={cx('item-avatar')}>
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="avatar"
                                />
                                <span></span>
                            </div>
                            <div className={cx('item-info')}>
                                <h2>Jon week</h2>
                                <span>Customer</span>
                            </div>
                        </div>

                        <div className={cx('item')}>
                            <div className={cx('item-avatar')}>
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="avatar"
                                />
                                <span></span>
                            </div>
                            <div className={cx('item-info')}>
                                <h2>Jon week</h2>
                                <span>Customer</span>
                            </div>
                        </div>

                        <div className={cx('item')}>
                            <div className={cx('item-avatar')}>
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="avatar"
                                />
                                <span></span>
                            </div>
                            <div className={cx('item-info')}>
                                <h2>Jon week</h2>
                                <span>Customer</span>
                            </div>
                        </div>

                        <div className={cx('item')}>
                            <div className={cx('item-avatar')}>
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="avatar"
                                />
                                <span></span>
                            </div>
                            <div className={cx('item-info')}>
                                <h2>Jon week</h2>
                                <span>Customer</span>
                            </div>
                        </div>

                        <div className={cx('item')}>
                            <div className={cx('item-avatar')}>
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="avatar"
                                />
                                <span></span>
                            </div>
                            <div className={cx('item-info')}>
                                <h2>Jon week</h2>
                                <span>Customer</span>
                            </div>
                        </div>

                        <div className={cx('item')}>
                            <div className={cx('item-avatar')}>
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="avatar"
                                />
                                <span></span>
                            </div>
                            <div className={cx('item-info')}>
                                <h2>Jon week</h2>
                                <span>Customer</span>
                            </div>
                        </div>

                        <div className={cx('item')}>
                            <div className={cx('item-avatar')}>
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="avatar"
                                />
                                <span></span>
                            </div>
                            <div className={cx('item-info')}>
                                <h2>Jon week</h2>
                                <span>Customer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('chat-content')}>
                <div className={cx('header')}>
                    <div className={cx('item')}>
                        <div className={cx('item-avatar')}>
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                alt="avatar"
                            />
                            <span></span>
                        </div>
                        <div className={cx('item-info')}>
                            <h2>Jon week</h2>
                            <span>Customer</span>
                        </div>
                    </div>
                </div>

                <div className={cx('content')}></div>
                <div className={cx('chat-content-footer')}>
                    <FontAwesomeIcon icon={faPlus} className={cx('icon-plus')} />
                    <InputEmoji></InputEmoji>
                    <FontAwesomeIcon icon={faPaperPlane} className={cx('icon-send')} />
                </div>
            </div>
            <div className={cx('right-side-chat')}></div>
        </div>
    );
}

export default Chat;
