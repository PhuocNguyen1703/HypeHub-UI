import React from 'react';
import Button from '~/components/Button';

function MenuItem({ data }) {
    return <Button lefticon>{data.title}</Button>;
}

export default MenuItem;
