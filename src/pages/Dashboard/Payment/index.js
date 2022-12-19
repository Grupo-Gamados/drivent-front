import styled from 'styled-components';
import Options from './Options';

export default function Payment() {
  return (
    <>
      <Title>Ingresso e pagamento</Title>
      <SubTitle>Primeiro, escolha sua modalidade de ingresso</SubTitle>
      <Options />
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
  margin-bottom: 20px;
  color: #8e8e8e;
`;
