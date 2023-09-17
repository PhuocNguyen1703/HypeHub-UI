import classNames from 'classnames/bind';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaRegCopy, FaSpinner } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { IoCloseCircle } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import CircleHeader from '~/components/CircleHeader/CircleHeader';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import { setModalOnClose } from '~/redux/Slice/modalSlice';
import * as searchServices from '~/services/searchApi';
import { MODAL_INVITE_PEOPLE } from '~/utils/constants';
import Modal from '../Modal';
import styles from './InvitePeople.module.scss';
import Image from '~/components/Image/Image';
import Icon from '~/components/Icon/Icon';

const cx = classNames.bind(styles);

const InvitePeople = () => {
  const { isOpen, modalType } = useSelector((state) => state.modal);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const debounced = useDebounce(searchValue, 700);

  const isModalOpen = isOpen & (modalType === MODAL_INVITE_PEOPLE);

  const handleCloseModal = () => {
    dispatch(setModalOnClose());
  };

  //handleClick out side
  // useEffect(() => {
  //   document.addEventListener('click', hideOnClickOutside, true);
  // }, []);

  // const hideOnClickOutside = (e) => {
  //   if (showResult) {
  //     if (searchRef.current && !searchRef.current.contains(e.target)) {
  //       setShowResult(false);
  //       return;
  //     }
  //   }

  //   setShowResult(true);
  // };

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debounced);
      setSearchResult(result);

      setLoading(false);
    };
    fetchApi();
  }, [debounced]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;

    if (!searchValue.startsWith(' ')) return setSearchValue(searchValue);
  };

  const handleSubmit = () => {};

  const handleResetSearchForm = () => {
    setSearchValue('');
    setSearchResult([]);
  };

  const handleSelectUser = (user) => {
    if (memberList.length > 8) return handleResetSearchForm();

    const newSearchResult = searchResult.filter((searchUser) => searchUser.id !== user.id);
    setMemberList([...memberList, user]);
    setSearchResult(newSearchResult);
    console.log(user);
  };

  if (isModalOpen) {
    return (
      <AnimatePresence>
        <Modal>
          <motion.div initial={{ x: '-50%', y: '-50%', scale: 0 }} animate={{ scale: 1 }} className={cx('wrapper')}>
            <header className={cx('header')}>
              <CircleHeader />
              <button className={cx('close-btn')} onClick={handleCloseModal}>
                <FaXmark />
              </button>
            </header>
            <span className={cx('title')}>
              Invite friends to <strong>Room</strong>
            </span>
            <div className={cx('search')}>
              <div className={cx('search-input')}>
                <input
                  ref={inputRef}
                  value={searchValue}
                  placeholder="Type the username of a friend."
                  spellCheck={false}
                  onChange={handleChange}
                />

                {!!searchValue && !loading && (
                  <button className={cx('clear-btn')} onClick={handleClear}>
                    <IoCloseCircle />
                  </button>
                )}

                {loading && <FaSpinner className={cx('loading')} />}

                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()} onClick={handleSubmit}>
                  <SearchIcon />
                </button>
              </div>

              <div className={cx('search-result')}>
                {showResult &&
                  searchResult.length > 0 &&
                  searchResult.map((user, idx) => (
                    <div key={user.id} className={cx('user')} onClick={() => handleSelectUser(user)}>
                      <div className={cx('info')}>
                        <Image className={cx('avatar')} src={user.avatar} alt="avatar" />
                        <div className={cx('user-name')}>
                          <span className={cx('name')}>{user.full_name}</span>
                          <span className={cx('position')}>Designer</span>
                        </div>
                      </div>
                      <button className={cx('invite-btn')}>Invite</button>
                    </div>
                  ))}
              </div>
            </div>
            <section className={cx('room-link-code')}>
              <span>You can send a room link or invite code to friend.</span>
              <div className={cx('input-group')}>
                <input type="text" className={cx('input')} />
                <Icon icon={<FaRegCopy />} className={cx('icon-copy')} />
              </div>
              <div className={cx('input-group')}>
                <input type="text" className={cx('input')} />
                <Icon icon={<FaRegCopy />} className={cx('icon-copy')} />
              </div>
            </section>
            <section className={cx('invite-code')}></section>
          </motion.div>
        </Modal>
      </AnimatePresence>
    );
  }
};

export default InvitePeople;
