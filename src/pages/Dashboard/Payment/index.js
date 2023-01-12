import Options from './Options';
import SubTitle from './Subtitle';
import Title from './Title';
import ReserveButton from './ReserveButton';
import ChosenTicket from './ChosenTicket';
import useTicket from '../../../hooks/api/useTicket';
import CreditCard from './CreditCard';

export default function Payment() {
  const { ticket } = useTicket();

  return (
    <>
      <Title>Ingresso e pagamento</Title>
      {ticket ? (
        <>
          <ChosenTicket />
          <CreditCard />
        </>
      ) : (
        <>
          <SubTitle>Primeiro, escolha sua modalidade de ingresso</SubTitle>
          <Options />
          <ReserveButton></ReserveButton>
        </>
      )}
    </>
  );
}
