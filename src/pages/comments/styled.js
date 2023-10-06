import { styled } from "styled-components";
import { keyframes } from 'styled-components';


const fadeIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const WrapperComments = styled.div`
  animation: ${fadeIn} 0.5s forwards;   
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
  width: 100%;
  min-height: 100vh;
`;

// const WrapperWithExitAnimation = styled(WrapperComments)`
//   animation: ${fadeOut} 1.5s forwards;
// `;




