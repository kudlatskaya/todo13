import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todoist-api";

export default {
    title: 'API'
}

const settings = {withCredentials: true}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(1)

    useEffect(() => {
        todolistAPI.getTodolists()
            .then((res) => {
                setState(res)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const title = 'REACT123'

        todolistAPI.createTodolist(title)
            .then((res) => {
                setState(res)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = '150d2651-425f-4b3b-9836-2a81f4a419e7'

        todolistAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = 'fe1853c2-59a0-494b-b5f6-0760fe169253'
        const title = 'REDUX123'

        todolistAPI.updateTodolist(todolistId, title)
            .then((res) => {
                setState(res)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

