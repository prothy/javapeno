import React from 'react';

let Header = ({header}) => {
    let headers = header.map((columnHeader, index) => (
        <th key={index}>{columnHeader}</th>
    ));
    return (
        <thead>
        <tr>
            {headers}
        </tr>
        </thead>
    );
}

export default Header;
