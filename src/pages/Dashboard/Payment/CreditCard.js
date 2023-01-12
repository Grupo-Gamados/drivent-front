import React from 'react';
import { useState } from 'react';
import SubTitle from './Subtitle';
import useTicket from '../../../hooks/api/useTicket';
import { SucessfulyPaid } from './Sucessfulypaid';
import PaymentForm from './PaymentForm';
import PaypalCheckoutButton from './PaypalCheckoutButton';
import { ErrorMessage, Title } from '../Activities/index';

export default function CreditCard() {
  const { ticket } = useTicket();
  const [showPayment, setShowPayment] = useState(true);

  if (ticket) {
    const product = {
      description: 'Drivent products',
      price: ticket.TicketType.price,
      currency: 'BRL',
    };

    return (
      <>
        <SubTitle>Pagamento</SubTitle>
        {showPayment === false || ticket.status === 'PAID' ? (
          <>
            <SucessfulyPaid />
          </>
        ) : (
          <>
            <PaymentForm ticketData={ticket} setShowPaymentForm={setShowPayment} />
            <PaypalCheckoutButton product={product} ticketData={ticket} setShowPaymentForm={setShowPayment} />
          </>
        )}
      </>
    );
  } else {
    return (
      <>
        <Title>VAI PAGAR O QUE SE NÃO ESCOLHEU O PRODUTO?</Title>
        <ErrorMessage>
          <h1>Primeiro escolha um Ticket jovem! Não pule etapas... </h1>
        </ErrorMessage>
      </>
    );
  }
}
