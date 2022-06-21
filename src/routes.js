import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/auth/private_route";
import { HomeScreen } from './pages/home';
import { LoginHomeScreen } from "./pages/home/loginScreen";
import { RegisterHomeScreen } from "./pages/home/registerScreen";
import { NotesScreen } from "./pages/notes/index";
import { UserEditScreen } from "./pages/users/edit";


const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            <Route exact path='/login' element={<LoginHomeScreen />} />
            <Route exact path='/register' element={<RegisterHomeScreen />} />
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
