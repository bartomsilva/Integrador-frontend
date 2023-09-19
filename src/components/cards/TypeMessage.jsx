import { styled } from "styled-components";
import { Line } from "../../pages/Login/styled";

export const WrapperMessage = styled.div`
  display: flex;
  max-width: 365px;
  height: fit-content;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  margin-bottom: 18px;
`;

export const ContainerMessage = styled.div`
  width: 364px;
  height: 131px;
  background-color: #EDEDED;
  border-radius: 12px;
  margin: 20px 0 15px 0;
;
`;

export const ButtonMessage = styled.div`
  width: 364px;
  height: 47px;
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  padding: 12px, 145px, 12px, 145px;
  border-radius: 12px;  

  font-family: IBM Plex Sans;
  font-size: 18px;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: 0em;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 15px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #EDEDED;
  padding-inline: 20px;
  padding-top: 20px; 
  border-radius: 12px;
`;

export default function TypeMessage() {

  return (

    <WrapperMessage>

      {/* place hoolder do textarea via paramentros*/}
      <ContainerMessage>
        <TextArea placeholder="Escreva seu post" />
      </ContainerMessage>

      {/* conteúdo do botão via paramentros - texto e função*/}
      <ButtonMessage>
        Postar
      </ButtonMessage>

      <Line></Line>

    </WrapperMessage>

  )
}