import React from 'react';

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transaction.id}</td>
      <td>{props.transaction.account_num_from}</td>
      <td>{props.transaction.account_num_to}</td>
      <td>{props.transaction.amount}</td>
      <td>{props.transaction.timestamp}</td>
      <td>{props.transaction.user_id}</td>
    </tr>
  );
};

export default Transaction;
