import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import { FaSpinner } from 'react-icons/fa';
import { IoCloseCircle } from 'react-icons/io5';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchApi';
import styles from './Message.module.scss';

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
        <div className={cx('wrapper')}>
            <input
                ref={inputRef}
                value={searchValue}
                className={cx('search-input')}
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

            {/* <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()} onClick={handleSubmit}>
                <BsSearch />
            </button> */}
        </div>
    );
}

export default Search;
