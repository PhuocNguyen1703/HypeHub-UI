import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

function PrivateRoute() {
    const user = useSelector((state) => state.auth.login.currentUser);

    return user?.isAdmin ? <Outlet /> : <h1>Not found</h1>;
}

export default PrivateRoute;
