import { styled } from "styled-components";

export const WrapperLogin = styled.form`
  display: flex;
  flex-direction: column; 
  justify-content: space-around;
  padding: 20px;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-family: IBM Plex Sans;
  font-size: 36px;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: 0em;
  text-align: left;
  color: #373737;
`;

export const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  p{
    font-family: IBM Plex Sans;
    font-size: 16px;
    font-weight: 300;
    line-height: 21px;
    letter-spacing: 0em;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 4;
  row-gap: 5px;
  position: relative;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  gap: 20px;
`;

export const Line  = styled.div`
  width: 100%;

  height: 2px;
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
`;

export const Input = styled.input`
  display: block;  
  width: 100%;
  height: 60px;
  margin: 1px 0px;
  padding-inline: 5px;
  text-align: center;
  border-color: rgba(0,0,0,0.2);
  border-radius: 4px;
  font-size: 18px;
  transition: 0.3s ease;  
  &:focus {
    border-width: 2.8px;
    border-color: #9747ff;   
  }
  &:hover {
    border-width: 4.5px;
    border-color: #9747ff;  
  }
`;

export const Button = styled.button`
  display: block;
  /* width: 365px; */
  width: 100%;
  height: 51px;
  padding: 13px, 133px, 13px, 133px;
  border-radius: 27px;
  /* padrão */
  transition: 0.3s ease;
  border: 1px solid #FE7E02;
  color: #FE7E02;
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  &:hover {
    color: #fff;
    background-color: rgba(254,126,2,0.8);
  }
  /*botão continuar  */
  &:nth-child(1){
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border: none;
    color: #ffffff;
    transition: 0.3s ease;
    &:hover {
      background: linear-gradient(90deg, #F9B24E 0%,  #FF6489 100%);
      color: rgba(0,0,0,0.6);
    }
  }  
 `;

export const ContainerBadPassword  = styled.div`
display: flex;
width: 100% ;
position: relative;
top: -30px;
justify-content: flex-end;

`;
export const BadPassword  = styled.a`
  color: #373737;
  font-size: 19px;
  transition: color 0.3s ease; /* Transição suave de cor em 0,3 segundos com easing (suavização) */

  &:hover {
    color: #fe7e02;
  }   

  &:active {
    color: inherit;
  }   
`;





