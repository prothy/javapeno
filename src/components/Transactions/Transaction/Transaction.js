import React from 'react';

const Transaction = ({trans, index}) => {
    return (
        <tr key={trans.id}>
            <td>{index + 1}</td>
            <td>{trans.timestamp}</td>
            <td>{trans.amount}</td>
            <td>{trans.accountNumFrom}</td>
            <td>{trans.accountNumTo}</td>
        </tr>
    );
};

export default Transaction;
