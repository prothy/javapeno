import React from 'react';
import { useHistory } from 'react-router';

const PaginationButton = ({pageState, dir}) => {
    const history = useHistory();

    const updatePage = () => {
        dir === 'next' ? pageState.setPage(pageState.page++) : pageState.setPage(pageState.page--);

        history.push({
            search: `?page=${pageState.page}`
        })
    }

    return (
        <button onClick={updatePage}>
            {dir.substring(0, 1).toUpperCase() + dir.substring(1)}
        </button>
    );
}

export default PaginationButton;
