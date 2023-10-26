import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import { FaSpinner } from 'react-icons/fa';
import { IoCloseCircle } from 'react-icons/io5';
import { SearchIcon } from '~/components/Icons';
import Image from '~/components/Image/Image';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchApi';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search({ memberList = [], setMemberList, currentMembers = [] }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 700);

  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const limitFriendsLength = 9 - memberList.length - currentMembers.length;

  //handleClick out side
  useEffect(() => {
    document.addEventListener('click', hideOnClickOutside, true);
  }, []);

  const hideOnClickOutside = (e) => {
    if (showResult) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResult(false);
        return;
      }
    }

    setShowResult(true);
  };

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debounced);
      const transformResult = result.filter((user) => !memberList.some((member) => user.id === member.id));

      setSearchResult(transformResult);

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
    if (limitFriendsLength === 0) return handleResetSearchForm();

    const newSearchResult = searchResult.filter((searchUser) => searchUser.id !== user.id);
    setMemberList([...memberList, user]);
    setSearchResult(newSearchResult);
  };

  return (
    <div ref={searchRef} className={cx('wrapper')}>
      <div className={cx('search-input', limitFriendsLength < 1 && 'disabled')}>
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

      {showResult && searchResult.length > 0 && limitFriendsLength > 0 && (
        <div className={cx('search-result')}>
          {searchResult.map((user) => (
            <div key={user.id} className={cx('user')} onClick={() => handleSelectUser(user)}>
              <Image className={cx('avatar')} src={user.avatar} alt="avatar" />
              <div className={cx('user-name')}>
                <span className={cx('name')}>{user.full_name}</span>
                <span className={cx('position')}>Designer</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
