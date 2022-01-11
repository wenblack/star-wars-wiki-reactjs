import styled from "styled-components";
import { Link } from 'react-router-dom';

export const linkStyle = {
    textDecoration: "none",
    color: 'black',
};

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: -7rem;
    div{
     background:var(--shape) ;
     padding: 1.5rem 1rem;
     border-radius: 0.25rem;
     color:var(--text-title);
        
        header{
            font-family: 'Poppins';
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
            
        }

        &.Total{
            background: var(--green);
            color: var(--shape)
        }
        img{
            width: 2rem;
            height: 2rem;
            display: flex;
            margin: auto;
            margin-top:1rem ;
            
        }
     
    }
`


