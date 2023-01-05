import React, { useEffect } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-card-component/dist/styles-compiled.css';
import styled from 'styled-components';
import * as Payment from 'payment';
import { useState } from 'react';
import SubTitle from './Subtitle';
import useTicket from '../../../hooks/api/useTicket';
import { useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';
import { postTicketPaid } from '../../../services/paymentApi';
import { SucessfulyPaid } from './Sucessfulypaid';
import useTicketPaid from '../../../services/paymentApi';

export default function CreditCard() {
  const token = useToken();
  const { ticketData } = useTicketPaid();
  const { ticket } = useTicket();
  const [paid, setPaid] = useState(false);
  const [paymentData, setPaymentData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focus: '',
  });
  const [focus, setFocus] = useState('');
  const navigate = useNavigate();

  const SubmitActionConfirm = (e) => {
    console.log('chegou aqui');
    e.preventDefault();

    const body = {
      focus,
      ticketTypeId: ticket.id,
      cardData: {
        ...paymentData,
        issuer: Payment.fns.cardType(paymentData.number)
      }
    };
    console.log(2);
    try {
      postTicketPaid(body, token);
      alert('Pagamento realizado com sucesso!!!');
      setPaid(true);
      navigate('/dashboard/hotel', { state: { paid: true, ticket: ticket } });
      useEffect(() => {
        if (ticketData?.status == 'PAID') {
          paid(false);
        }
      }, []);
    } catch (error) {
      alert('Pagamento não realizado! Verifique o preenchimento dos campos!');
    }
  };

  return (
    <>
      <SubTitle>Pagamento</SubTitle>
      {paid ?
        <>
          <SucessfulyPaid />
        </>
        :
        <CreditCardWrapper>
          <Form onSubmit={SubmitActionConfirm}>
            <CardBox>
              <MyCard>
                <Cards
                  number={paymentData.number}
                  name={paymentData.name}
                  expiry={paymentData.expiry}
                  cvc={paymentData.cvc}
                  focused={paymentData.focus} />
              </MyCard>
              <MyCard2>
                <Input
                  type="tel"
                  name="number"
                  placeholder="Card Number"
                  value={paymentData.number}
                  onChange={(e) => setPaymentData({ ...paymentData, number: e.target.value })}
                  onFocus={(e) => setFocus(e.target.name)}
                />
                <Description>E.g.: 42..., 51..., 36..., 37...</Description>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={paymentData.name}
                  required
                  onChange={(e) => setPaymentData({ ...paymentData, name: e.target.value })}
                  onFocus={(e) => setFocus(e.target.name)}
                />
                <LastBox>
                  <InputValidThru
                    type="text"
                    name="expiry"
                    placeholder="Valid Thru"
                    value={paymentData.expiry}
                    onChange={(e) => setPaymentData({ ...paymentData, expiry: e.target.value })}
                    onFocus={(e) => setFocus(e.target.name)}
                  />
                  <InputCVV
                    type="tel"
                    name='cvc'
                    placeholder="CVV"
                    value={paymentData.cvc}
                    onChange={e => setPaymentData({ ...paymentData, cvc: e.target.value })}
                    onFocus={(e) => setFocus(e.target.name)}
                  />
                </LastBox>
              </MyCard2>
            </CardBox>
            <Button
              type="submit"
              onClick={(e) => SubmitActionConfirm(e)}
            >Finalizar pagamento</Button>
          </Form>
        </CreditCardWrapper>
      }
    </>

  );
}
const Form = styled.form``;
const Description = styled.h3`
color: gray;
font-family: 'Roboto', sans-serif;
margin: 10px 0;
`;
const LastBox = styled.div`
display: flex;
width: 295px;
justify-content: space-between;
`;

const CreditCardWrapper = styled.div`
  display: flex;
  > div {
    margin-right: 24px;
  }
`;

const CardBox = styled.div`
  height: 225px;
  width: 100%;
  border-radius: 0px;
  display: flex;
`;

const MyCard = styled.div`
  height: 200px;
  width: 290px;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  padding: 5px;
  //background-color: gray;
  display: flex;
  justify-content: center;
  //align-items: center;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const MyCard2 = styled.div`
  //height: 200px;
  //width: 290px;
  border-radius: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin-left: 20px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const Input = styled.input`
width: 294px;
height: 40px;
margin: 5px 0;
font-family: 'Roboto', sans-serif;
font-size: 1rem;
padding: .375rem .75rem;
font-size: 1rem;
line-height: 1.5;
color: #495057;
background-color:#fff;
background-clip: padding-box;
border: 1px solid #ced4da;
border-radius: .25rem;
transition: border color .15s;
`;
const InputValidThru = styled.input`
width: 180px;
height: 40px;
margin: 5px 0;
font-family: 'Roboto', sans-serif;
font-size: 1rem;
padding: .375rem .75rem;
font-size: 1rem;
line-height: 1.5;
color: #495057;
background-color:#fff;
background-clip: padding-box;
border: 1px solid #ced4da;
border-radius: .25rem;
transition: border color .15s;
`;
const InputCVV = styled.input`
width: 90px;
height: 40px;
margin: 5px 0;
font-family: 'Roboto', sans-serif;
font-size: 1rem;
padding: .375rem .75rem;
font-size: 1rem;
line-height: 1.5;
color: #495057;
background-color:#fff;
background-clip: padding-box;
border: 1px solid #ced4da;
border-radius: .25rem;
transition: border color .15s;
`;
const ExampleCard = styled.p`
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: gray;
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
  font-family: 'Roboto', sans-serif;
  background-color: lightgray;
  border: none;
  outline: none;
  :hover {
    background-color: #ffeed2;

    box-shadow: 0px 15px 20px lightgray;
    color: #000;
    transform: translateY(-7px);
  }
`;
