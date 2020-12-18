import React , { useState , useContext , useEffect } from 'react'
import { SocketContext } from '../../context/SocketContext'
import palette from 'google-palette'

import { Container } from './styles'

import { Chart as PrimeChart } from 'primereact/chart'

const Chart = () => {

    const lightOptions = {
        legend: {
            labels: {
                fontColor: '#495057'
            }
        }
    }

    const { socket } = useContext(SocketContext)
    const [ chartData , setChartData ] = useState({})

    useEffect(() => {
        socket.on('get-bands',bands => {
            setChartData({
                labels: bands.map(band => band.name),
                datasets: [
                    {
                        data: bands.map(band => band.votes),
                        backgroundColor: palette(['tol', 'qualitative'], bands.length).map(hex => {
                            return '#' + hex;
                        })
                    }
                ]
            })
        })
    },[])

    return (
        <Container>
            <PrimeChart type='pie' data={chartData} options={lightOptions} />
        </Container>
    )
}

export default Chart