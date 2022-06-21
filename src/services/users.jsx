import { Api } from "./api";

const UsersService = {
    register: (params) => Api.post('/users/register', params),
    login: async (params) => {
        let response = await Api.post('/users/login/', params);
        localStorage.setItem('jwtoken', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
    },
    logout: () => {
        localStorage.removeItem('jwtoken');
        localStorage.removeItem('user');
    },
    update: async (params) => {
        let response = await Api.put('/users', params, {
            headers: { 'x-access-token': localStorage.getItem('jwtoken') }
        });
        localStorage.setItem('user', JSON.stringify(response.data));
    },
    updatePassword: async (params) => {
        await Api.put('/users/password', params, {
            headers: { 'x-access-token': localStorage.getItem('jwtoken') }
        });
    },
    delete: async () => {
        await Api.delete('/users', {
            headers: { 'x-access-token': localStorage.getItem('jwtoken') }
        });
        localStorage.removeItem('jwtoken');
        localStorage.removeItem('user');
    },
}

export default UsersService;