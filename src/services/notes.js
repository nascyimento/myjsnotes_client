import { Api } from "./api";

const NotesService = {
    index: () => Api.get('/notes', {
        headers: { 'x-access-token': localStorage.getItem('jwtoken') }
    }),
    create: () => Api.post('/notes', { 'title': 'Nova nota', 'body': 'Corpo da nota...' }, {
        headers: { 'x-access-token': localStorage.getItem('jwtoken') }
    }),
    delete: (id) => Api.delete(`/notes/${id}`, {
        headers: { 'x-access-token': localStorage.getItem('jwtoken') }
    }),
    update: (id, params) => Api.put(`/notes/${id}`, params, {
        headers: { 'x-access-token': localStorage.getItem('jwtoken') }
    }),
    search: (query) => Api.get(`/notes/search?query=${query}`, {
        headers: { 'x-access-token': localStorage.getItem('jwtoken') }
    }),
}

export default NotesService;