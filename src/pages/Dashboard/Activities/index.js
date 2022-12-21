import styled from 'styled-components';
import useEventDays from '../../../hooks/api/useEventDays';

export default function Activities() {
  const { eventDays, eventDaysError } = useEventDays();

  // eslint-disable-next-line eqeqeq
  if (eventDaysError == 'Error: Request failed with status code 402') {
    return (
      <>
        <Title>Escolha de atividades</Title>
        <ErrorMessage>
          <h1>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades</h1>
        </ErrorMessage>
      </>
    );
    // eslint-disable-next-line eqeqeq
  } else if (eventDaysError == 'Error: Request failed with status code 403') {
    return (
      <>
        <Title>Escolha de atividades</Title>
        <ErrorMessage>
          <h1>Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.</h1>
        </ErrorMessage>
      </>
    );
  } else {
    return (
      <>
        <Title>Escolha de atividades</Title>
        <SubTitle>Primeiro, filtre pelo dia do evento: </SubTitle>
        <DaysBox>
          {eventDays !== null ? (
            eventDays.map((day, index) => <Button key={index}>{day.name}</Button>)
          ) : (
            <h1>Este evento não possui atividades</h1>
          )}
        </DaysBox>
      </>
    );
  }
}

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 85%;
  width: 100%;

  h1 {
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-size: 20px;
    color: #8e8e8e;
    width: 55%;
    line-height: 23px;
  }
`;

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
  b {
    font-weight: 700;
  }
`;

const DaysBox = styled.div`
  display: flex;
  gap: 17px;
`;

const Button = styled.div`
  height: 37px;
  width: 130px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  background-color: #e0e0e0;
  border: none;
  outline: none;
  :hover {
    background-color: #ffd37d;
  }
`;
