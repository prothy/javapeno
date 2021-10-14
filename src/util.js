import PaginationButton from "./components/Util/PaginationButton";
import React from "react";
import * as PropTypes from "prop-types";

export function numberFormat(value) {
    return  new Intl.NumberFormat('hu-HU', {
            style: 'currency',
            currency: 'HUF'
        }).format(value);
}

export function formatDate(dateString) {
    const options = {year: "numeric", month: "long", day: "numeric"}
    return new Date(dateString).toLocaleDateString(undefined, options)
}

export function PagerButtons(props) {
    return <div className="pageButtons">
        <PaginationButton pageState={{page: props.page, setPage: props.page1, maxPage: props.maxPage}} dir="prev"/>{' '}
        <PaginationButton pageState={{page: props.page, setPage: props.page1, maxPage: props.maxPage}} dir="next"/>
    </div>;
}

PagerButtons.propTypes = {
    page: PropTypes.number,
    page1: PropTypes.func,
    maxPage: PropTypes.number
};