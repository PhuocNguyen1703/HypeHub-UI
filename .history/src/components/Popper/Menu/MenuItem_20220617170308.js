import React from 'react';

function MenuItem({ data }) {
    console.log();
    return <button>{JSON.stringify(data)}</button>;
}

export default MenuItem;
