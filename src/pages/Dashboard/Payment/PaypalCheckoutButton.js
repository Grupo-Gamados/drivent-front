import React from 'react';
import styled from 'styled-components';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function PaypalCheckoutButton() {
  return (
    <PayPalScriptProvider>
      <BoxPayPal>
        <PayPalButtons />
      </BoxPayPal>
    </PayPalScriptProvider>
  );
}

const BoxPayPal = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: auto;
`;

export default PaypalCheckoutButton;
