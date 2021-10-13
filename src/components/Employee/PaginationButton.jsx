import React from 'react';
import { useHistory } from 'react-router';

const PaginationButton = ({pageState, dir}) => {
    const history = useHistory();

    const updatePage = () => {
        let nextPage = dir === 'next' ? parseInt(pageState.page) + 1 : parseInt(pageState.page) - 1;

        if (nextPage <= 0) {
            nextPage = 0;
        } else if (nextPage > pageState.maxPage) {
            nextPage = pageState.maxPage;
        }
        
        pageState.setPage(nextPage);

        history.push({
            search: `?page=${nextPage}`
        });
    }

    return (
        <button onClick={updatePage}>
            {dir.substring(0, 1).toUpperCase() + dir.substring(1)}
        </button>
    );
}

export default PaginationButton;
