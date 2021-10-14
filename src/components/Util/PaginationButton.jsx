import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap';

const PaginationButton = ({pageState, dir}) => {
    const history = useHistory();

    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        setDisabled(false)
        if (pageState.page === 0) {
            if (dir === 'prev') setDisabled(true)
        } else if (pageState.page === pageState.maxPage) {
            if (dir === 'next') setDisabled(true)
        }
    }, [pageState, dir, setDisabled])

    const updatePage = (event) => {
        let nextPage = dir === 'next' ? parseInt(pageState.page) + 1 : parseInt(pageState.page) - 1;

        event.target.removeAttribute('disabled')

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
        <Button onClick={updatePage} disabled={disabled}>
            {dir.substring(0, 1).toUpperCase() + dir.substring(1)}
        </Button>
    );
}

export default PaginationButton;
