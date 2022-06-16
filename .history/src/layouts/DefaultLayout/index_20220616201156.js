import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import De

import React from 'react';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
