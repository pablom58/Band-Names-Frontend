import { useState , useEffect , useMemo } from 'react'
import io from 'socket.io-client'
import { SOCKET_ENTRYPOINT } from '../config'

export const useSocket = () => {
    const socket = useMemo(() => io.connect(SOCKET_ENTRYPOINT,{
        transports: ['websocket']
    }),[ SOCKET_ENTRYPOINT ])

    const [online,setOnline] = useState(false)

    useEffect(() => {
        setOnline(socket.connected)
    },[socket])

    useEffect(() => {
        socket.on('connect', () => setOnline(true))
    },[socket])

    useEffect(() => {
        socket.on('disconnect',() => setOnline(false))
    },[socket])

    return {
        socket,
        online
    }
}