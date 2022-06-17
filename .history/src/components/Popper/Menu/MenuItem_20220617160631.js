import React from 'react';
import Button from '~/components/Button';

function MenuItem({ data }) {
    return <Button left>{data.title}</Button>;
}

export default MenuItem;
