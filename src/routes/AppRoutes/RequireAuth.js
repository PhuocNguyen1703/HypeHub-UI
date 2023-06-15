import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function RequireAuth() {
    const user = useSelector((state) => state.auth.login.currentUser);

    return user ? <Outlet /> : <Navigate to="/login" />;
}

export default RequireAuth;
