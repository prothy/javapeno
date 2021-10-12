/* User data
private UUID id;
private LocalDate updatedDate;
private String name;
private String phoneNumber;
private String email;
private Address address;
private UserStatus status;
private UserPrivilege privilege;
private BigDecimal salary;
*/

import React from "react";
import Table from 'react-bootstrap/Table';
import Header from "./Header";
import Body from "./Body";

let Employee = () => {
    let header = ['Name', 'Phone number', 'E-mail', 'Address', 'Salary']
    let body = [['Name', 'Phone number', 'E-mail', 'Address', 'Salary']]
    return (
        <div className="employee">
            <Table striped bordered hover>
                <Header header={header}/>
                <Body body={body}/>
            </Table>
        </div>
    );
};

export default Employee;