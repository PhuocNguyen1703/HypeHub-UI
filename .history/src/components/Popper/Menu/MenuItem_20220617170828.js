import React from 'react';
import Button from '~/components/Button';

function MenuItem({ data }) {
    console.log(data);
    return <Button>{JSON.stringify(data)}</But>;
}

export default MenuItem;
