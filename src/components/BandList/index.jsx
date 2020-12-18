import React , { useState , useEffect , useContext } from 'react'
import { SocketContext } from '../../context/SocketContext'

import {
    Container
} from './styles'

import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

const BandList = () => {

    const { socket } = useContext(SocketContext)
    const [ bands , setBands ] = useState([])

    useEffect(() => {
        socket.emit('get-bands')
    },[socket])

    useEffect(() => {
        socket.on('get-bands', bands => setBands(bands))
    },[socket])

    const updateBand = (id,field,value) => {
        if(value.trim() !== '')
            socket.emit('update-band',{
                id,
                [field]: value
            })
    }

    const inputTextEditor = (props, field) =>{
        return <InputText type='text' defaultValue={props.rowData[field]} onBlur={input => updateBand(props.rowData.id,field,input.target.value)} />
    }

    const handleEdit = (props,field) => {
        return inputTextEditor(props,field)
    }

    const voteBand = id => {
        socket.emit('vote-band',{ id })
    }

    const deleteBand = id => {
        socket.emit('delete-band',{ id })
    }

    const voteActionButton = rowData => {
        return <Button label='+1' onClick={() => voteBand(rowData.id)} />
    }

    const deleteActionButton = rowData => {
        return <Button label='Delete' className='p-button-danger' onClick={() => deleteBand(rowData.id)} />
    }

    return (
        <Container>
            <DataTable value={bands} editMode='cell' className='editable-cells-table' >
                <Column header='Votar' body={voteActionButton} />
                <Column field='name' header='Band Name' editor={props => handleEdit(props,'name')} />
                <Column field='votes' header='Votes' />
                <Column header='Eliminar' body={deleteActionButton} />
            </DataTable>
        </Container>
    )
}

export default BandList