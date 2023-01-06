import React, { useEffect } from 'react';
import { useState } from 'react';
import SubTitle from './Subtitle';
import useTicket from '../../../hooks/api/useTicket';
import useToken from '../../../hooks/useToken';
import { SucessfulyPaid } from './Sucessfulypaid';
import PaymentForm from './PaymentForm';

export default function CreditCard() {
  const token = useToken();
  const { ticket } = useTicket();
  const [showPayment, setShowPayment] = useState(true);

  useEffect(() => {
    if (ticket?.status == 'PAID') {
      setShowPayment(false);
    }
  });

  return (
    <>
      <SubTitle>Pagamento</SubTitle>
      {showPayment == 'false' ?
        <>
          <SucessfulyPaid />
        </>
        :
        <PaymentForm ticketData={ticket} setShowPaymentForm={setShowPayment} />
      }
    </>

  );
};
