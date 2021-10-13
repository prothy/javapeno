import React from 'react';
import {Link} from "react-router-dom";

const Transaction = ({trans, index}) => {
    return (
        <>
            <tr key={trans.id}>
                <td>
                    <Link to={`/transaction/${trans.id}`} key={trans.id}>{index + 1}</Link>
                </td>
                <td>{trans.timestamp}</td>
                <td>{trans.amount}</td>
            </tr>
        </>
    );
};

export default Transaction;
