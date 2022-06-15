import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => localStorage.getItem('jwtoken');

const PrivateRoute = () => (

    isAuthenticated() ? <Outlet /> : <Navigate to='/login' />

);

export default PrivateRoute;