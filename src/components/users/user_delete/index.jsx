import { useState } from 'react';
import { Button } from "rbx";
import UsersService from '../../../services/users';
import { Navigate } from "react-router-dom";

const UsersDelete = () => {
    let [redirectToHome, setRedirectToHome] = useState(false);

    const deleteUser = async () => {
        if (window.confirm('Are you sure you wish to delete this account?')) {
            await UsersService.delete()
            setRedirectToHome(true)
        }
    }

    if (redirectToHome)
        return <Navigate to={{ pathname: "/" }} />

    return (
        <Button color="danger" onClick={() => deleteUser()}>
            Delete account
        </Button>
    )
}

export { UsersDelete };
