let TableRow = ({line}) => {
    let columns = line.map((column, index) =>
        <td key={index}>
            {column}
        </td>
    );
    return (
        <>
            {columns}
        </>
    );
};

export default TableRow;