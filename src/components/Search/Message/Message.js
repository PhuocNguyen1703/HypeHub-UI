import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import { SearchIcon } from '~/components/Icons';
import styles from './Message.module.scss';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/api/searchApi';
import { IoCloseCircle } from 'react-icons/io5';
import { FaSpinner } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 700);

    const inputRef = useRef();

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

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleSubmit = () => {};

    return (
        <div className={cx('search')}>
            <input
                ref={inputRef}
                value={searchValue}
                placeholder="Search message"
                spellCheck={false}
                onChange={handleChange}
                onFocus={() => setShowResult(true)}
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
    );
}

export default Search;
