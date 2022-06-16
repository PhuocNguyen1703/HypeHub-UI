import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';

import React from 'react';

function DefaultLayout({}) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content"></div>
            </div>
        </div>
    );
}

export default DefaultLayout;
