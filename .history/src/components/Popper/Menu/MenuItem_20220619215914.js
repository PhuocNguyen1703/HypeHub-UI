import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types'

import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button className={cx('menu-item', { separate: data.separate })} leftIcon={data.icon}>
            {data.title}
        </Button>
    );
}



export default MenuItem;
