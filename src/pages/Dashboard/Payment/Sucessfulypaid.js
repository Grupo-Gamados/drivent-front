import styled from 'styled-components';
import ok from '../../../assets/images/ok.svg';

export function SucessfulyPaid() {
  return (
    <>
      <StyledScreen>
        <img src={ok} alt="ok" />
        <SucessWraper>
          <StyledConfirm variant="h6" color="#454545" weight="700">
            Pagamento confirmado!
          </StyledConfirm>
          <StyledConfirm variant="h6" color="#454545" weight="500">
            Prossiga para a escolha de hospedagem e atividades
          </StyledConfirm>
        </SucessWraper>
      </StyledScreen>
    </>
  );
}

const SucessWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 14px;
  gap: 3px;
`;

const StyledConfirm = styled.p`
  font-weight: ${(props) => props.weight};
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.color};
`;
const StyledScreen = styled.div`
  display: flex;
`;
