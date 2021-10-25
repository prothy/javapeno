import React from 'react';
import {numberFormat, formatDate} from "../../../util.js"

const Transaction = ({trans, index}) => {
    return (
        <tr key={trans.id}>
            <td>{index + 1}</td>
            <td>{formatDate(trans.timestamp)}</td>
            <td>{numberFormat(trans.amount)}</td>
            <td>{trans.accountNumFrom}</td>
            <td>{trans.accountNumTo}</td>
        </tr>
    );
};

export default Transaction;
