import React from 'react';
import Button from '~/components/Button';
import claa

function MenuItem({ data }) {
    return <Button leftIcon={data.icon}>{data.title}</Button>;
}

export default MenuItem;
