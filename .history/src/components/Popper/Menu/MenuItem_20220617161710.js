import React from 'react';
import Button from '~/components/Button';

function MenuItem({ data }) {
    console.log();
    return <Button leftIcon = {data.icon}>{data.title}</Button>;
}

export default MenuItem;
