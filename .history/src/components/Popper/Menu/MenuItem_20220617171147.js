import React from 'react';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles

function MenuItem({ data }) {
    return <Button leftIcon={data.icon}>{data.title}</Button>;
}

export default MenuItem;
