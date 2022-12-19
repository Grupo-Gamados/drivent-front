import styled from 'styled-components';
import Options from './Options';

export default function Payment() {
  return (
    <>
      <Title>Ingresso e pagamento</Title>
      <SubTitle>Primeiro, escolha sua modalidade de ingresso</SubTitle>
      <Options />
      <SubTitle>Fechado! O total ficou em <b>R$100</b>. Agora é só confirmar.</SubTitle>
      <Button>Reservar ingresso</Button>
    </>
  );
}
const Title = styled.h1`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 34px;
  margin-bottom: 30px;
  color: #000000;
`;

const SubTitle = styled.h2`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 20px;
  margin: 20px 0;
  color: #8e8e8e;
  b{
    font-weight: 700;
  }
`;

const Button = styled.div`
height: 37px;
width: 200px;
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease 0s;
cursor: pointer;
font-family: 'Roboto',sans-serif;
background-color: lightgray;
border: none;
outline: none;
:hover{
  background-color: #FFEED2;
  box-shadow: 0px 15px 20px lightgray;
  color: #000;
  transform: translateY(-7px);
};`;
