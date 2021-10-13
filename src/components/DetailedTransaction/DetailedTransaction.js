import React, { useState } from 'react';

const DetailedTransaction = (props) => {
  const [transaction, setTransaction] = useState({
    id: '54e070d8-9a06-fb14-01f2-98722bc783e9',
    account_num_from: '11111111-11111111-11111111',
    account_num_to: '11111111-11111111-22222222',
    amount: 89999,
    timestamp: '2021.10.10.',
    user_id: 'e1a84108-568d-40ca-a406-0e4032c8383d',
  });
  return (
    <>
      <h1>Details</h1>
      <p>
        <strong>ID: </strong>
        {transaction.id}
      </p>
      <p>
        <strong>FROM: </strong>
        {transaction.account_num_from}
      </p>
      <p>
        <strong>TO: </strong>
        {transaction.account_num_to}
      </p>
      <p>
        <strong>AMOUNT: </strong>
        {transaction.amount}
      </p>
      <p>
        <strong>DATE: </strong>
        {transaction.timestamp}
      </p>
      <p>
        <strong>USER ID: </strong>
        {transaction.user_id}
      </p>
    </>
  );
};

export default DetailedTransaction;
