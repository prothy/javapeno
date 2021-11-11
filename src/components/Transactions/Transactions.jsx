import React, {useCallback, useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import Transaction from './Transaction/Transaction';
import DayPicker from "./DayPicker";
import "./Transactions.css"
import * as PropTypes from "prop-types";
import {PagerButtons} from "../../util";
import { useHistory } from 'react-router';

import { AuthorizationError } from '../Util/errors';

function TransactionsHeader() {
    return <h4 id="transactionsHeader">User's transactions</h4>;
}

function TransactionsTableHeader() {
    return <thead>
    <tr>
        <th>#</th>
        <th>Date</th>
        <th>Amount</th>
        <th>From</th>
        <th>To</th>
    </tr>
    </thead>;
}

function TransactionsTableBody(props) {
    return <tbody>
    {props.transactions ?
        props.transactions.map(props.callbackfn) :
        <tr>
            <td colSpan="5">No transactions for user</td>
        </tr>
    }
    </tbody>;
}

TransactionsTableBody.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.any),
    callbackfn: PropTypes.func
};

const Transactions = () => {
    const history = useHistory()

    const [transactions, setTransactions] = useState([]);
    const [page, setPage] = useState(0);
    const [maxPage, setMaxPage] = useState(0);

    const [responseObj, setResponseObj] = useState({})

    let [fromDate, setFromDate] = useState("");
    let [toDate, setToDate] = useState("");


    const fetchTransactions = useCallback(async (url) => {
        const userTransactions = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            mode: 'cors'
        })
            .then(res => res.json())
            .catch(err => console.error(err))

        setMaxPage(userTransactions.totalPages - 1)
        setTransactions(userTransactions.content)

        setResponseObj(userTransactions)
    }, [])

    const validateAuthorization = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:8080/api/transaction', {
                credentials: 'include'
            })
            if (response.status === 403) throw new AuthorizationError()
        } catch (e) {
            console.log(e);
            history.push("/?unauthorized");
        }
    }, [history])

    useEffect(() => {
        validateAuthorization();
        
        const pageNum = window.location.search ? new URLSearchParams(window.location.search).get('page') : 0;
        setPage(parseInt(pageNum));
        let userId = "8cb3a14a-e68e-f902-badb-3e9877e6b330";
        let url = "http://localhost:8080/api/transaction/all?userId=" + userId;
        if (fromDate !== "" && toDate !== "") {
            url = "http://localhost:8080/api/transaction/report?userId=" +
                userId + "&dateFrom=" + fromDate + "&dateTo=" + toDate + "";
        }
        url += `&page=${page}`;
        fetchTransactions(url)
            .catch(err => console.error(err))
    }, [fetchTransactions, page, fromDate, toDate, validateAuthorization]);

    return (
        <>
            <TransactionsHeader/>
            <DayPicker setFromDate={setFromDate} setToDate={setToDate}/>
            <PagerButtons page={page} page1={setPage} maxPage={maxPage}/>
            <div className="showText">Showing
                transactions {parseInt((responseObj.size * responseObj.number) + 1)} - {parseInt((responseObj.size * responseObj.number) + responseObj.numberOfElements)} out
                of {parseInt(responseObj.totalElements)}
            </div>
            <div className="transactions">
                <Table className="transaction-list" striped>
                    <TransactionsTableHeader/>
                    <TransactionsTableBody transactions={transactions}
                                           callbackfn={(trans, index) => <Transaction trans={trans} index={index}/>}/>
                </Table>
            </div>
        </>
    );
};

export default Transactions;
