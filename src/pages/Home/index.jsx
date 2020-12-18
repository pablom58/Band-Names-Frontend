import React , { useContext } from 'react'
import { SocketContext } from '../../context/SocketContext'

import {
    Container,
    Text,
    Title
} from './styles'

import BandAdd from '../../components/BandAdd'
import BandList from '../../components/BandList'
import Chart from '../../components/Chart'

const Home = () => {

    const { online } = useContext(SocketContext)

    return (
        <Container>
            <Text>
               Service 
               <span 
                style={{
                    color: online ? 'green' : 'red' 
                }} 
               >
                   { online ? ' Online' : ' Offline' }
                </span>
            </Text>
            <Title>PMVS BandNames</Title>
            <Chart />
            <BandAdd />
            <BandList />
        </Container>
    )
}

export default Home