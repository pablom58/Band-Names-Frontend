import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 25px;
    & canvas{
        width: 500px;
        height: 500px;
    }
`