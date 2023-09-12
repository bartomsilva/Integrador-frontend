import { styled } from "styled-components";

export const WrapperHeader = styled.div`
  display: flex;
  max-width: 428px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: #EDEDED;
  div {   
    width: 33.33%;  }  
`;

export const HeaderLogo = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: center;
`;

export const ContainerButton = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: right;
  padding-right: 20px;
`;

export const Button = styled.button`
  width: 67px;
  height: 35px;
  border: none;
  background-color: transparent;
  padding: 5px;
  color: #4088CB;

  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0em;
  &:hover{
    color: #5099CB;
  }
`;
