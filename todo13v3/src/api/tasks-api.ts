import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {},
})

export const tasksAPI = {
    getTasks(todolistId: string) {
        return instance.get<GetTasksType>(`/todo-lists/${todolistId}/tasks`)
            .then(res => res.data)
    },

    createTask(todolistId: string, title: string) {
        return instance.post<ResponseType<{ item: TaskType }>>(`/todo-lists/${todolistId}/tasks`, {title})
            .then(res => res.data)
    },

    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`/todo-lists/${todolistId}/tasks/${taskId}`)
            .then(res => res.data)
    },

    updateTask(todolistId: string, taskId: string, title: string) {
        return instance.put<ResponseType<{ item: TaskType }>>(`/todo-lists/${todolistId}/tasks/${taskId}`, {title})
            .then(res => res.data)
    },
}

type TaskType = {
    addedDate: Date
    id: string
    order: number
    priority: number
    startDate: Date
    status: number
    title: string
    todoListId: string
}

type GetTasksType = {
    error: string
    items: TaskType[]
    totalCount: number
}

type ResponseType<T = {}> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}


