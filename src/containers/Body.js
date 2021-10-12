import TableRow from "./TableRow";

let Body = ({body}) => {
    let lines = body.map(line =>
        <tr>
            <TableRow line={line}/>
        </tr>
    );
    return (
        <>
            <tbody>
                {lines}
            </tbody>
        </>
    );
};

export default Body;