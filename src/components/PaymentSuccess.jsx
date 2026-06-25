// PaymentSuccess.jsx
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const method = searchParams.get('method');
  const transactionId = searchParams.get('transaction_id');

  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1>✅ Payment Successful!</h1>
      <p>Method: {method?.toUpperCase()}</p>
      <p>Transaction ID: {transactionId}</p>
      <p>Your order has been confirmed.</p>
      <button onClick={() => window.location.href = '/'}>Continue Shopping</button>
    </div>
  );
};

export default PaymentSuccess;