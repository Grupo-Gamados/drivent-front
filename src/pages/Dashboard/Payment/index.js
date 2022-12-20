import Options from './Options';
import SubTitle from './Subtitle';
import Title from './Title';
import ReserveButton from './ReserveButton';

export default function Payment() {
  return (
    <>
      <Title>Ingresso e pagamento</Title>
      <SubTitle>Primeiro, escolha sua modalidade de ingresso</SubTitle>
      <Options />
      <ReserveButton></ReserveButton>
    </>
  );
}
