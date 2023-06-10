import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API'
}

const settings = {withCredentials: true}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(1)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
         axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
             .then((res) => {
                 setState(res.data)
             })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const payload = {
            title: 'REACT'
        }

        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', payload, settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = 'ab673f27-3290-448e-99e4-d7240a1b501c'

        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        const todolistId = '150d2651-425f-4b3b-9836-2a81f4a419e7'
        const payload = {
            title: 'REDUX'
        }

        axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, payload, settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

