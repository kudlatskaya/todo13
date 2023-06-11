import axios from 'axios'

const settings = {
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '1cdd9f77-c60e-4af5-b194-659e4ebd5d41',
    },
}

export const todolistAPI = {
    getTodolists() {
        return axios.get(
            'https://social-network.samuraijs.com/api/1.1/todo-lists',
            settings
        )
            .then(res => res.data)
    },

    createTodolist(title: string) {
        return axios.post(
            'https://social-network.samuraijs.com/api/1.1/todo-lists',
            { title },
            settings
        )
            .then(res => res.data)
    },

    deleteTodolist(todolistId: string) {
        return axios.delete(
            `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            settings
        )
            .then(res => res.data)
    },

    updateTodolist(todolistId: string, title: string) {
        return axios.put(
            `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            { title },
            settings
        )
            .then(res => res.data)
    },
}