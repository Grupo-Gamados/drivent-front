import React, { useState } from 'react';
import styled from 'styled-components';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const PaypalCheckoutButton = (props) => {
  const { products } = props;

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderID) => {
    setPaidFor(true);
  };

  if (paidFor) {
    alert('Pagamento confirmado!');
  }

  if (error) {
    alert(error);
  }
  return (
    <PayPalScriptProvider>
      <BoxPayPal>
        <PayPalButtons
          style={{ size: '200px' }}
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
                  description: products.description,
                  amount: {
                    value: products.price,
                  },
                },
              ],
            });
          }}
          onApprove={(data, action) => {
            const order = action.order.capture();
            console.log('order', order);
            handleApprove(data.orderID);
          }}
          onCancel={() => { }}
          onError={(err) => {
            setError();
            console.log('Erro no pagamento!', err);
          }}
        />
      </BoxPayPal>
    </PayPalScriptProvider>
  );
};

const BoxPayPal = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: auto;
width: 200px;
`;

export default PaypalCheckoutButton;
