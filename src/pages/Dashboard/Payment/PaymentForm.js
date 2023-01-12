import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import Cards from 'react-credit-cards-2';
import 'react-credit-card-component/dist/styles-compiled.css';
import * as paymentApi from '../../../services/paymentApi';
import useToken from '../../../hooks/useToken';

export default function PaymentForm({ ticketData, setShowPaymentForm }) {
  const token = useToken();

  const ticketId = ticketData?.id;
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focus: '',
  });

  function handleInputFocus(event) {
    setCardData({
      ...cardData,
      focus: event.target.name,
    });
  }
  function handleInputChange(event) {
    setCardData({
      ...cardData,
      [event.target.name]: event.target.value,
    });
  }
  async function SubmitActionConfirm(e) {
    e.preventDefault();
    if (
      cardData.number.length === 0 ||
      cardData.cvc.length === 0 ||
      cardData.name.length === 0 ||
      cardData.expiry === 0
    ) {
      toast('Preencha todos os campos!');
      return;
    }
    const issuer = cardData.number.substring(0, 2);
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
      await paymentApi.postTicketPaid(token, paymentBody);
      toast('Pagamento confirmado!');
      setShowPaymentForm(false);
    } catch (error) {
      toast('Oops, algo não deu certo!');
    }
  }

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
              focused={cardData.focus}
            />
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
                name="cvc"
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
        <Button type="submit" onClick={(e) => SubmitActionConfirm(e)}>
          Finalizar pagamento
        </Button>
      </Form>
    </CreditCardWrapper>
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
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border color 0.15s;
`;
const InputValidThru = styled.input`
  width: 180px;
  height: 40px;
  margin: 5px 0;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border color 0.15s;
`;
const InputCVV = styled.input`
  width: 90px;
  height: 40px;
  margin: 5px 0;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border color 0.15s;
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
