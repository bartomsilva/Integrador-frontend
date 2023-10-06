import { styled } from "styled-components";
import { keyframes } from 'styled-components';


const fadeOut = keyframes`
   from {
     transform: translateX(-100%);
   }
   to {
     transform: translateX(0);
   }
 `;

export const WrapperPost = styled.div`
animation: ${fadeOut} 0.5s forwards;   
display: flex;
flex-direction: column; 
justify-content: flex-start;
align-items: center;
width: 100%;
padding-left: 20px;
padding-right: 20px;
min-height: 100vh;
`;