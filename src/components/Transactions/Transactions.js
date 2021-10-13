import React, {useCallback, useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import Transaction from './Transaction/Transaction';
import PaginationButton from "../Layout/PaginationButton";

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [page, setPage] = useState(0);
    const [maxPage, setMaxPage] = useState(0);

    const [responseObj, setResponseObj] = useState({})


    const fetchTransactions = useCallback(async () => {
        const userTransactions = await fetch(
            `http://localhost:8080/api/transaction/all?userId=8cb3a14a-e68e-f902-badb-3e9877e6b330&page=${page}`, {
                method: 'GET',
                credentials: 'include',
                mode: 'cors'
            })
            .then(res => res.json())
            .catch(err => console.error(err))

        setMaxPage(userTransactions.totalPages - 1)
        setTransactions(userTransactions.content)

        setResponseObj(userTransactions)
    }, [page])

    useEffect(() => {
        const pageNum = window.location.search ? new URLSearchParams(window.location.search).get('page') : 0;
        setPage(parseInt(pageNum));

        fetchTransactions()
            .catch(err => console.error(err))
    }, [fetchTransactions]);

    return (
        <>
            <div>
                <PaginationButton pageState={{page, setPage, maxPage}} dir="prev"/>
                <PaginationButton pageState={{page, setPage, maxPage}} dir="next"/>
            </div>
            <div>Showing
                transactions {parseInt((responseObj.size * responseObj.number) + 1)} - {parseInt((responseObj.size * responseObj.number) + responseObj.numberOfElements)} out
                of {parseInt(responseObj.totalElements)}</div>
            <Table className="transaction-list" striped>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                {
                    transactions ?
                        transactions.map((trans, index) => <Transaction trans={trans} index={index}/>) :
                        <tr>
                            <td colSpan="2">No transactions for user</td>
                        </tr>
                }
                </tbody>
            </Table>
        </>
    );
};

export default Transactions;
