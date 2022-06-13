import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/auth/private_route";
import { HomeScreen } from './screens/home';
import { LoginHomeScreen } from "./screens/home/loginHomeScreen";
import { NotesScreen } from "./screens/notes/index";
import { UserEditScreen } from "./screens/users/edit";

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            <Route exact path='/login' element={<LoginHomeScreen />} />
            <Route exact path='/notes' element={<PrivateRoute />}>
                <Route exact path='/notes' element={<NotesScreen />} />
            </Route>
            <Route exact path='/user/edit' element={<PrivateRoute />}>
                <Route exact path='/user/edit' element={<UserEditScreen />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export { AppRoutes };