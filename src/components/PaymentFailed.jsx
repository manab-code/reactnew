import React from 'react';
import { useSearchParams } from 'react-router-dom';

const PaymentFailed = () => {
  const [searchParams] = useSearchParams();
  const reason = searchParams.get('reason');

  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1>❌ Payment Failed</h1>
      <p>Reason: {reason || 'Unknown error'}</p>
      <button 
        onClick={() => window.location.href = '/'}
        style={{
          padding: '12px 24px',
          background: '#111',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          marginTop: '20px'
        }}
      >
        Try Again
      </button>
    </div>
  );
};

export default PaymentFailed;