import React, {useEffect, useState} from 'react'
import {tasksAPI} from "../api/tasks-api";

export default {
    title: 'API'
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(1)

    useEffect(() => {
        const todolistId = '739ac064-8ddf-4a67-b228-2b35844ad25c'

        tasksAPI.getTasks(todolistId)
            .then((res) => {
                setState(res)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const title = 'react'
        const todolistId = '739ac064-8ddf-4a67-b228-2b35844ad25c'

        tasksAPI.createTask(todolistId, title)
            .then((res) => {
                setState(res)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = '739ac064-8ddf-4a67-b228-2b35844ad25c'
        const taskId = '1d3db09b-7cd1-4f9f-b079-f110275708d5'

        tasksAPI.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = '739ac064-8ddf-4a67-b228-2b35844ad25c'
        const taskId = 'fe598c47-5086-4bcc-b9e3-8b58eeea3d93'
        const title = 'REDUX123'

        tasksAPI.updateTask(todolistId, taskId, title)
            .then((res) => {
                setState(res)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

