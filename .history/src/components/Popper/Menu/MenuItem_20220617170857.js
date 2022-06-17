import React from 'react';
import Button from '~/components/Button';

function MenuItem({ data }) {
    return <Button icon>{data.title}</Button>;
}

export default MenuItem;
