import { styled } from "styled-components";

export const ContainerEyePassword=styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* align-itens: center; */
  position: relative;
  top: -50px;
  right: -46%;
  @media (max-width: 600px) {
    right: -44%;
  }
`;

export const ButtonToogleEye = styled.div`
  padding: 5px;
  min-width: 28px; 
  min-height: 28px;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 100%;
  transition: 0.3s ease;
  ${({ $eye }) => $eye &&
    `
    background-image: url(/image/eye_off.svg);
    `} 
  ${({ $eye }) => !$eye &&
    `
    background-image: url(/image/eye_on.svg);
    `} 
  background-size: contain;
  background-repeat: no-repeat;
  &:focus {
    border-width: 1.8px;
    border-color: #9747ff;   
  }
  &:hover {
    border-width: 1.5px;
    border-color: #9747ff; 
    cursor: pointer; 
  }
  `;
  