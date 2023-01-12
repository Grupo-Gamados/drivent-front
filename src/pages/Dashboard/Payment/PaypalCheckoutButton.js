import React, { useState } from 'react';
import styled from 'styled-components';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { toast } from 'react-toastify';
import * as paymentApi from '../../../services/paymentApi';
import useToken from '../../../hooks/useToken';

const PaypalCheckoutButton = (props) => {
  const ticketId = props.ticketData?.id;
  const token = useToken();
  const { product } = props;
  const [error, setError] = useState(null);

  async function handleApprove() {
    const paymentBody = {
      ticketId,
      cardData: { number: 5555444433332222, name: 'PAYPAL', expiry: '1234', cvc: 1234, issuer: '55' },
    };
    try {
      await paymentApi.postTicketPaid(token, paymentBody);
      toast('Pagamento confirmado!');
      props.setShowPaymentForm(false);
    } catch (error) {
      toast('Oops, algo não deu certo!');
    }
  }

  if (error) {
    alert(error);
  }
  return (
    <PayPalScriptProvider
      options={{
        'client-id': 'AYnYvVg8O7F8uTck37ry-MNCKFlYIiVh_ti6G_eMuLJiSo9ruDhYGNtLAKVkYM_MtTZ4C4sbM5mo0rRf',
        currency: 'BRL',
      }}
    >
      <BoxPayPal>
        <PayPalButtons
          style={{ size: '500px' }}
          onClick={(data, actions) => {
            const hasAlreadyBoughtEvent = false;
            if (hasAlreadyBoughtEvent) {
              setError('Você já pagou esse evento');
              return actions.reject();
            } else {
              return actions.resolve();
            }
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: product.description,
                  amount: {
                    value: product.price,
                  },
                },
              ],
            });
          }}
          onApprove={async function my(data, action) {
            await action.order.capture();
            handleApprove();
          }}
          onCancel={() => {}}
          onError={(err) => {
            setError();
          }}
        />
      </BoxPayPal>
    </PayPalScriptProvider>
  );
};

const BoxPayPal = styled.div`
  display: flex;
  margin: -35px 0 0 230px;
  width: 200px;
`;

export default PaypalCheckoutButton;
