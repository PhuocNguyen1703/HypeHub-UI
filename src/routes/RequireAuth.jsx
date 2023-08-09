import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout';

function RequireAuth() {
    const user = useSelector((state) => state.auth.login.currentUser);

    return user ? <DefaultLayout/> : <Navigate to="/login" />;
}

export default RequireAuth;
