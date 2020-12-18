import React , { useState , useContext } from 'react'
import { SocketContext } from '../../context/SocketContext'

import {
    Container,
    StyledButton
} from './styles'

import { InputText } from 'primereact/inputtext'

const BandAdd = () => {

    const [ name , setName ] = useState('')

    const { socket } = useContext(SocketContext)

    const saveBand = () => {
        if(name.trim() !== ''){
            socket.emit('add-band',{ name: name.trim() })
            setName('')
        }
    }

    return (
        <Container>
            <InputText value={name} onChange={input => setName(input.target.value)} />
            <StyledButton label='Add' onClick={saveBand} />
        </Container> 
    )
}

export default BandAdd