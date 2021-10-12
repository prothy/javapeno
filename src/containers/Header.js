import React from 'react';

let Header = ({header}) => {
    let headers = header.map(columnHeader => (
        <th>{columnHeader}</th>
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
