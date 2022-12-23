import styled from 'styled-components';
import useEventDays from '../../../hooks/api/useEventDays';
import { Link, useParams } from 'react-router-dom';
import * as activitiesApi from '../../../services/activitiesApi';
import useToken from '../../../hooks/useToken';
import React from 'react';
import vagas from '../../../assets/images/vagas.svg';

export default function ActivitiesOfTheDay() {
  const token = useToken();
  const { eventDays, eventDaysError } = useEventDays();
  const { dayId } = useParams();
  const dayIdNum = parseInt(dayId);
  const [listActivities, setListActivities] = React.useState([]);
  const actsAudPrincipal = listActivities.filter((act) => act.localId === 1);
  const actsAudLateral = listActivities.filter((act) => act.localId === 2);
  const actsSala = listActivities.filter((act) => act.localId === 3);

  // eslint-disable-next-line no-lone-blocks
  {
    eventDays !== null ? (
      eventDays.map((day, index) => (
        <Link key={index} to={`/dashboard/activities/${day.id}`}>
          <Button>{day.name}</Button>
        </Link>
      ))
    ) : (
      <h1>Este evento não possui atividades</h1>
    );
  }

  function teste() {
    console.log('funcionando');
  }

  // eslint-disable-next-line space-before-function-paren
  React.useEffect(async () => {
    const response = await activitiesApi.getActivities(token, dayIdNum);
    setListActivities(response.data);
  }, [dayIdNum]);

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
        <DaysBox>
          {eventDays !== null ? (
            eventDays.map((day, index) => (
              <Link key={index} to={`/dashboard/activities/${day.id}`}>
                <Button>{day.name}</Button>
              </Link>
            ))
          ) : (
            <h1>Este evento não possui atividades</h1>
          )}
        </DaysBox>
        <ContainerActivity>
          <ContainerLocal>
            <TitleLocal>Auditório Principal</TitleLocal>
            <BoxLocal>
              {actsAudPrincipal.map((activity, index) => (
                <Activity key={index} alturaDiv={`${activity.duration}`}>
                  <Descricao>
                    <h1>{activity.name}</h1>
                    <h2>
                      {activity.startTime} - {activity.endTime}
                    </h2>
                  </Descricao>
                  <Vagas>
                    <img src={vagas} alt="vagas"></img>
                    <h1>{activity.totalVagas} vagas</h1>
                  </Vagas>
                </Activity>
              ))}
            </BoxLocal>
          </ContainerLocal>

          <ContainerLocal>
            <TitleLocal>Auditório Lateral</TitleLocal>
            <BoxLocal>
              {actsAudLateral.map((activity, index) => (
                <Activity key={index} alturaDiv={`${activity.duration}`}>
                  <Descricao>
                    <h1>{activity.name}</h1>
                    <h2>
                      {activity.startTime} - {activity.endTime}
                    </h2>
                  </Descricao>
                  <Vagas>
                    <img src={vagas} alt="vagas"></img>
                    <h1>{activity.totalVagas} vagas</h1>
                  </Vagas>
                </Activity>
              ))}
            </BoxLocal>
          </ContainerLocal>

          <ContainerLocal>
            <TitleLocal>Sala de Workshop</TitleLocal>
            <BoxLocal>
              {actsSala.map((activity, index) => (
                <Activity key={index} alturaDiv={`${activity.duration}`}>
                  <Descricao>
                    <h1>{activity.name}</h1>
                    <h2>
                      {activity.startTime} - {activity.endTime}
                    </h2>
                  </Descricao>
                  <Vagas>
                    <img src={vagas} alt="vagas"></img>
                    <h1>{activity.totalVagas} vagas</h1>
                  </Vagas>
                </Activity>
              ))}
            </BoxLocal>
          </ContainerLocal>
        </ContainerActivity>
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

const ContainerActivity = styled.div`
  width: 100%;
  height: 60%;
  margin-top: 60px;
  display: flex;
`;

const ContainerLocal = styled.div`
  width: 33.334%;
  height: 100%;
`;

const TitleLocal = styled.h2`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 20px;
  margin: 15px 0;
  color: #7b7b7b;
  text-align: center;
  b {
    font-weight: 700;
  }
`;

const BoxLocal = styled.div`
  border: 1px solid #d7d7d7;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 5% 0;
`;

const Activity = styled.div`
  width: 90%;
  height: ${(props) => props.alturaDiv * 80}px;
  background-color: #f1f1f1;
  border-radius: 5px;
  display: flex;
`;

const Descricao = styled.div`
  width: 70%;
  height: 80%;
  h2,
  h1 {
    font-size: 12px;
    color: #343434;
    margin: 10px;
  }

  h1 {
    font-weight: bold;
    line-height: 18px;
  }
`;

const Vagas = styled.div`
  width: 30%;
  min-height: 70%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #cfcfcf;

  h1 {
    color: #078632;
    font-size: 9px;
    margin-top: 5px;
  }
`;
