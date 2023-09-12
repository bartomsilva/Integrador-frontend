import { styled } from "styled-components";

export const WrapperLogin = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-around;
  max-width: 428px;
  min-height: 100vh;
`

export const Title = styled.h1`
  font-family: IBM Plex Sans;
  font-size: 36px;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: 0em;
  text-align: left;
  color: #373737;
`

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
`
export const ContainerInput = styled.div`
  width: 100;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 4;
`

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  gap: 20px
`

export const Line  = styled.div`
  width: 363.0055158939032px;
  height: 2px;
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
`

export const Input = styled.input`
  display: block;
  width: 363px;
  height: 60px;
  margin: 1px 0px;
  padding-inline: 5px;
  bor
  
  &:hover {
    border-color: #8B08F7; /* Defina a cor da borda quando o mouse estiver sobre o input */
  }
  &:focus {
    border-color: #B368F1; /* Defina a cor da borda quando o mouse estiver sobre o input */
  }
`

export const Button = styled.button`
  display: block;
  width: 365px;
  height: 51px;
  padding: 13px, 133px, 13px, 133px;
  border-radius: 27px;
  &:nth-child(1){
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border: none;
    color: #ffffff;
  }
  border: 1px solid #FE7E02;
  color: #FE7E02;
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;

 `



