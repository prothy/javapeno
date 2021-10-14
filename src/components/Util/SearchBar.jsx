import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const SearchBar = ({searchByName}) => {

    return (
        <InputGroup className="mb-3" 
            // onChange={(event) => searchByName(event.target.value)}
            >
            <FormControl
                placeholder="Search by name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(event) => searchByName(event.target.value)}
            />
            <Button variant="outline-secondary" id="button-addon2">
                Search
            </Button>
     </InputGroup>
    );
}

export default SearchBar;
