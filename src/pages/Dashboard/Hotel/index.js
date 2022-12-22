import styled from 'styled-components';

export default function Hotel() {
  return <>
    <Title>Escolha de hotel e quarto</Title>
    <SubTitleBox>
      <SubTitle>Sua modalidade de ingresso não inclui hospedagem</SubTitle>
      <SubTitle>Prossiga para a escolha de atividades</SubTitle>
    </SubTitleBox>
  </>;
}

const Title = styled.h1`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 34px;
  margin-bottom: 30px;
  color: #000000;
`;
const SubTitleBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 70%;
`;

const SubTitle = styled.div`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 20px;
  color: #8e8e8e;
  b{
    font-weight: 700;
  }
`;
