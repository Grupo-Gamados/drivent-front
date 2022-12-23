import styled from 'styled-components';
import SubTitle from './Subtitle';
import Cards from 'react-credit-cards';
import { useState } from 'react';
//import card from '../../../assets/images/card.png';

export default function CreditCard() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  return (
    <>
      <SubTitle>Pagamento</SubTitle>
      <CreditCardWrapper>
        <CardBox>
          <MyCard>
            <Cards
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focus}
            />
          </MyCard>
          <MyCard2>
            <form >
              <Input type="tel" name='cardnumber' placeholder='Card Number' value={number} required onChange={e => setNumber(e.target.value)} onFocus={e => setFocus(e.target.name)} />
              <h3>E.g.:49..., 51..., 36..., 37...</h3>
              <Input type="text" name='name' placeholder='Name' value={name} required onChange={e => setName(e.target.value)} onFocus={e => setFocus(e.target.name)} />

              <Input type="text" name='expiry' placeholder='Valid Thru' value={expiry} required maxlength="9" onChange={e => setExpiry(e.target.value)} onFocus={e => setFocus(e.target.name)} />

              <Input type="tel" placeholder="CVV" required value={cvc} onChange={e => setCvc(e.target.value)} onFocus={e => setFocus(e.target.name)} />
            </form>
          </MyCard2>
        </CardBox>

      </CreditCardWrapper>
      <Button type="submit">Finalizar Pagamento</Button>
    </>
  );
}

const CreditCardWrapper = styled.div`
            display: flex;
  > div {
            margin-right: 24px;
  }
            `;

const CardBox = styled.div`
            height: 225px;
            width: 600px;
            border-radius: 0px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            `;

const MyCard = styled.div`
            height: 200px;
            width: 290px;
            border-radius: 20px;
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            padding: 10px;
            background-color: gray;
            display: flex;
            justify-content: start;
            align-items: flex-end;
            img{
              width: 100%;
            object-fit: cover;
}
            `;
const MyCard2 = styled.div`
            height: 200px;
            width: 290px;
            border-radius: 20px;
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            img{
              width: 100%;
            object-fit: cover;
}
            `;
const Input = styled.input`
            width: 100%;
            height: 40px;
            border-radius: 8px;
            margin: 5px 0;
            font-family: 'Roboto', sans-serif;
            background-clip: padd;
            font-size: 1rem;
            border: 1px solid gray;
            transition: border-color .15s;
            border: 1px solid gray;
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
