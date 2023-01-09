import React, { useEffect } from 'react';
import { useState } from 'react';
import SubTitle from './Subtitle';
import useTicket from '../../../hooks/api/useTicket';
import useToken from '../../../hooks/useToken';
import { SucessfulyPaid } from './Sucessfulypaid';
import PaymentForm from './PaymentForm';
/* import PaypalCheckoutButton from './PaypalCheckoutButton'; */

export default function CreditCard() {
  const { ticket } = useTicket();
  const [showPayment, setShowPayment] = useState(true);

  return (
    <>
      <SubTitle>Pagamento</SubTitle>
      {showPayment === false || ticket?.status === 'PAID' ? (
        <>
          <SucessfulyPaid />
        </>
      ) : (
        <>
          <PaymentForm ticketData={ticket} setShowPaymentForm={setShowPayment} />
          {/* <PaypalCheckoutButton product={product} /> */}
        </>
      )}
    </>
  );
}
