import styled from 'styled-components';
import card from '../../../assets/images/card.png';

export default function CreditCard() {
  return (
    <>
      <CreditCardWrapper>
        <CardBox>
          <MyCard>
            <img src={card} alt='ta'></img>
          </MyCard>
          <MyCard>
            <CardNumber placeholder='Card Number'></CardNumber>
            <ExampleCard>E.g.:49..., 51..., 36..., 37...</ExampleCard>
            <Name placeholder='Name'></Name>
            <Valid>
              <ValidThru placeholder='Valid Thru'></ValidThru>
              <CVV placeholder='CVV'></CVV>
            </Valid>
          </MyCard>
        </CardBox>
      </CreditCardWrapper>
      <Button>Finalizar Pagamento</Button>
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
img{
  width: 100%;
  object-fit: cover;
}

`;
const CardNumber = styled.input`
width: 100%;
height: 40px;
border-radius: 8px;
margin: 5px 0;
font-family: 'Roboto', sans-serif;
font-size: 16px;
border: 1px solid gray;
`;
const ExampleCard = styled.p`
font-size: 16px;
font-family: 'Roboto', sans-serif;
font-size: 16px;
color: gray;
`;
const Name = styled.input`
width: 100%;
height: 40px;
border-radius: 8px;
margin: 20px 0 2px 0;
font-family: 'Roboto', sans-serif;
font-size: 16px;
border: 1px solid gray;
`;
const CVV = styled.input`
width: 30%;
height: 40px;
border-radius: 8px;
font-family: 'Roboto', sans-serif;
font-size: 16px;
border: 1px solid gray;
`;
const Valid = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Roboto', sans-serif;
font-size: 16px;
`;
const ValidThru = styled.input`
width: 60%;
height: 40px;
border-radius: 8px;
margin: 10px 0;
font-family: 'Roboto', sans-serif;
font-size: 16px;
border: 1px solid gray;
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
