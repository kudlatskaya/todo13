import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {},
})

export const todolistAPI = {
    getTodolists() {
        return instance.get<GetTodolistType[]>('todo-lists')
            .then(res => res.data)
    },

    createTodolist(title: string) {
        return instance.post<ResponseType<{item: GetTodolistType}>>('todo-lists', {title})
            .then(res => res.data)
    },

    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
            .then(res => res.data)
    },

    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todolistId}`, {title})
            .then(res => res.data)
    },
}

type GetTodolistType = {
    id: string,
    title: string,
    addedDate: Date,
    order: number
}

type ResponseType<T = {}> = {
    resultCode: number,
    messages: string[],
    data: T
}
