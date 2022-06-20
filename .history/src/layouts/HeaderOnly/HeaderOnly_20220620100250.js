import PropTypes from 'prop-types';
import class

import Header from '~/layouts/components/Header';
import styles from './HeaderOnly.module.scss';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node,
};

export default DefaultLayout;
