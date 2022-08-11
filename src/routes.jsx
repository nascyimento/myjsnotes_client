import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/auth/private_route";
import { HomeScreen } from "./pages/home";
import { LoginHomeScreen } from "./pages/home/loginScreen";
import { RegisterHomeScreen } from "./pages/home/registerScreen";
import { NotesScreen } from "./pages/notes/index/index";
import { UserEditScreen } from "./pages/users/edit";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginHomeScreen />} />
      <Route path="/register" element={<RegisterHomeScreen />} />
      <Route path="/notes" element={<PrivateRoute />}>
        <Route path="/notes" element={<NotesScreen />} />
      </Route>
      <Route path="/user/edit" element={<PrivateRoute />}>
        <Route path="/user/edit" element={<UserEditScreen />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export { AppRoutes };

