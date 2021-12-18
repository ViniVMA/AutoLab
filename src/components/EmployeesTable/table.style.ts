import styled from 'styled-components';
import { Button } from '../Button'


export const TableBody = styled.div`
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 20fr 1fr; 
    gap: 0px 0px; 
    overflow: hidden;
    color: #495057;
    
   
        ul {
            display: grid; 
            justify-items: start;
            grid-auto-columns: 1fr; 
            grid-template-columns: 1.5fr 2.5fr 1.5fr 1.5fr 3fr;
            grid-template-rows: 50px;
            gap: 0px 0px; 
            grid-template-areas: 
            "li li li li li"; 
            align-items: center;
            margin: 15px;
            padding: 12.5px 0 12.5px 35px;
            list-style-type: none;
            height: 75px;

        }



        li{
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            margin: 5px;
            width: 100%;
            height: auto;
            
           
        }
    
        

    
`

export const TableWrapper = styled.div`
        padding-bottom: 40px;
        
    
    
`

export const PageTitle = styled.div`
    padding: 40px 0;
    font-weight: 600;
    font-size: 30px;
`

export const ListWrapper = styled.div`
    
    box-shadow: 0px 0px 6px rgba(162, 162, 162, 0.25);
    border-radius: 3px;
    border: 1px solid #E6E6E6;
    

    
`

export const Divider = styled.ul`
            border-radius: 3px;
            background-color: #F9F9F9;
            margin: 15px;         
       

    li {
        
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        color: #858585;
    }
`

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    font-weight: 600;
    font-size: 20px;

    .buttonWrapper {
        display: flex;
        }

     .pageNumbers button {
            background-color: red;
            padding: 7px; 
            border: none;
            text-decoration: none;
            background-color: #fff;
            color: #858585;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            margin: 5px;

         &:hover {
            background: #F54A48;
            color: #fff;
    }

        &:focus {
            background-color: ##F54A48;
    }
        }

    h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        padding: 25px 30px;
        letter-spacing: -0.02em;
    }
`

export const TableTitle = styled.div`
        

`

export const ButtonBack = styled.button`
    width: 100px;
    padding: 7px 0; 
    border: none;
    text-decoration: none;
    background-color: #fff;
    color: #858585;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    margin: 5px;

    &:hover {
        background: #EDEDED
    }

    &:focus {
        background-color: #e5e5e5;
    }
`

export const ButtonNext = styled.button`
    width: 100px;
    padding: 7px 0; 
    border: none;
    text-decoration: none;
    background-color: #fff;
    color: #858585;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    margin: 5px;

    &:hover {
        background: #EDEDED
    }

    &:focus {
        background-color: #e5e5e5;
    }  
`

    