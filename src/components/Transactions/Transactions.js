import React, { useState } from 'react';
import Transaction from './Transaction/Transaction';

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    {
      id: '54e070d8-9a06-fb14-01f2-98722bc783e9',
      account_num_from: '11111111-11111111-11111111',
      account_num_to: '11111111-11111111-22222222',
      amount: 89999,
      timestamp: '2021.10.10.',
      user_id: 'e1a84108-568d-40ca-a406-0e4032c8383d',
    },
    {
      id: 'bc5b136d-91cb-4b60-a782-59a01bbb27e7',
      account_num_from: '11111111-11111111-11111111',
      account_num_to: '11111111-11111111-22222222',
      amount: 3199,
      timestamp: '2021.09.12.',
      user_id: '28b483cc-f11f-ad50-0743-996de7cb01c4',
    },
    {
      id: 'ec87b342-dea4-4c70-ae10-06abcde04f1c',
      account_num_from: '11111111-11111111-11111111',
      account_num_to: '11111111-11111111-22222222',
      amount: 6499,
      timestamp: '2021.08.02.',
      user_id: '28b483cc-f11f-ad50-0743-996de7cb01c4',
    },
  ]);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>FROM</th>
          <th>TO</th>
          <th>AMOUNT</th>
          <th>DATE</th>
          <th>USER ID</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((actualTransaction) => (
          <Transaction transaction={actualTransaction} />
        ))}
      </tbody>
    </table>
  );
};

export default Transactions;
