import React, { useState, useNavigate } from 'react';
import styled from 'styled-components';
import * as Payment from 'payment';
import Cards from 'react-credit-cards-2';
import 'react-credit-card-component/dist/styles-compiled.css';
import postTicketPaid from '../../../services/paymentApi';
import useToken from '../../../hooks/useToken';

export default function PaymentForm({ ticketData, setShowPaymentForm }) {
  //const navigate = useNavigate();
  const token = useToken();
  const ticketId = ticketData?.id;
  const [issuer, setIssuer] = useState('');
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focus: '',
  });
  const [focus, setFocus] = useState('');
  function handleInputFocus(event) {
    setCardData({
      ...cardData,
      focus: event.target.name,
    });
  };
  function handleInputChange(event) {
    setCardData({
      ...cardData,
      [event.target.name]: event.target.value,
    });
  };
  async function SubmitActionConfirm(e) {
    e.preventDefault();
    const newCardData = {
      ...cardData,
      issuer,
      number: Number(cardData.number),
      cvc: Number(cardData.cvc),
    };
    delete newCardData.focus;
    const paymentBody = {
      ticketId,
      cardData: { ...newCardData },
    };
    try {
      const result = postTicketPaid({ paymentBody });
      alert('Ticket pago com sucesso!');
      setShowPaymentForm(false);
    } catch (error) {
      alert('Não foi possível pagar seu ticket!');
    }
  };

  return (
    <CreditCardWrapper>
      <Form onSubmit={SubmitActionConfirm}>
        <CardBox>
          <MyCard>
            <Cards
              number={cardData.number}
              name={cardData.name}
              expiry={cardData.expiry}
              cvc={cardData.cvc}
              focused={cardData.focus} />
          </MyCard>
          <MyCard2>
            <Input
              required
              type="tel"
              name="number"
              placeholder="Card Number"
              pattern="[\d| ]{16,22}"
              value={cardData.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <Description>E.g.: 42..., 51..., 36..., 37...</Description>
            <Input
              required
              type="text"
              name="name"
              placeholder="Name"
              value={cardData.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <LastBox>
              <InputValidThru
                required
                type="text"
                name="expiry"
                placeholder="Valid Thru"
                pattern="\d\d/\d\d"
                maxLength={4}
                value={cardData.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <InputCVV
                required
                type="tel"
                name='cvc'
                placeholder="CVV"
                pattern="\d{3,4}"
                maxLength={4}
                value={cardData.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
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
  );
};

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
  }`;
