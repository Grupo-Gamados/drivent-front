import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function PaypalCheckoutButton() {
  return (
    <PayPalScriptProvider>
      <PayPalButtons />
    </PayPalScriptProvider>
  );
}

export default PaypalCheckoutButton;
