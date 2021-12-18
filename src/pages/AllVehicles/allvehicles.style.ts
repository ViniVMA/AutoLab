import styled from 'styled-components';


export const AllVehiclesBody = styled.div`
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 20fr 1fr; 
    gap: 0px 0px; 
    overflow: hidden;
    color: #495057;
`

export const ListWrapper = styled.div`
    margin-top: 130px;
    box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
    border-radius: 3px;
    border: 1px solid #E6E6E6;

    h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        padding: 25px 30px;
        letter-spacing: -0.02em;
    }
`

export const Divider = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 3px;
    background-color: #F9F9F9;
    height: 70px;
    margin: 15px;

    p {
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        color: #858585;
    }

`

