import React from 'react';
import Button from '~/components/Button';

function MenuItem({ data }) {
    return <Button>{data.ti}</Button>;
}

export default MenuItem;
