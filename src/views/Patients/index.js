import React, { Component } from 'react';
import {Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';

class Patients extends Component{   
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    callAPI() {
        axios.get('/api/patients')
        .then(res => this.setState({ data: res.data.patients }))
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    }

    componentWillMount() {
        this.callAPI();
    }
    render(){   
        return <Row>
                    <Col xs="12">
                        <Card>
                            <CardHeader>Filter listing</CardHeader>
                            <CardBody>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Patients Listing
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Gender</th>
                                            <th>Birthday</th>
                                            <th>Address</th>
                                            <th>Contact No.</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.data.map((patient, index) => (
                                            <tr key={index}>
                                                <td>{patient.fullName}</td>   
                                                <td>{patient.gender}</td>
                                                <td>{patient.dateOfBirth}</td>
                                                <td>{patient.address}</td>
                                                <td>{patient.contactNumber}</td>
                                                <td>Active</td>
                                            </tr>
                                            ))
                                        }
                                        <tr>
                                            <td colspan="6">No record found</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>;
    }
}

export default Patients;
