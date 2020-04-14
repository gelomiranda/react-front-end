import React, { Component } from 'react';
import axios from 'axios';
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Fade,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupText,
    Label,
    Row,
    Alert,
} from 'reactstrap';

class Patients extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            visible: false,
            err:[]
        };

        this.onDismiss = this.onDismiss.bind(this);
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }

    onDismiss() {
        this.setState({ visible: false });
    }


    handleSubmit = (event) => {
        event.preventDefault()
        var e = event.target;
        axios.post('/api/patients',{
            'firstName':e.firstName.value,
            'middleName':e.middleName.value
        })
        .then(function (response) {
            console.log(response);
        })
        .catch((error) => {
            console.log(error.response);
            this.setState({visible:true,err:error.response.data.error});
        })
    }
    

    render() {
        return <div className="animated fadeIn">
            <Row>
                <Col>
                    <Alert color="danger" isOpen={this.state.visible}>
                        {this.state.err.map((error, index) => (
                            <ul key={index}>
                                <li>{error}</li>
                            </ul>
                        ))}
                        
                    </Alert>
                </Col>
            </Row>
            <Row>
                
                <Col xs="12">
                    <Card>
                        <Form method="post" onSubmit={this.handleSubmit}>
                        <CardHeader>
                            <strong>Credit Card</strong>
                            <small> Form</small>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="3">
                                    <FormGroup>
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input type="text" id="firstName" name="firstName" required />
                                    </FormGroup>
                                </Col>
                                <Col xs="3">
                                    <FormGroup>
                                        <Label htmlFor="middleName">Middle Name</Label>
                                        <Input type="text" id="middleName" name="middleName" required />
                                    </FormGroup>
                                </Col>
                                <Col xs="3">
                                    <FormGroup>
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input type="text" id="lastName" name="lastName" required />
                                    </FormGroup>
                                </Col>
                                <Col xs="3">
                                    <FormGroup>
                                        <Label htmlFor="ccmonth">Gender</Label>
                                        <Input type="select" name="ccmonth" id="ccmonth">
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="3">
                                    <FormGroup>
                                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                                        <Input type="date" id="dateOfBirth" name="dateOfBirth" placeholder="date" />
                                    </FormGroup>
                                </Col>
                                <Col xs="3">
                                    <FormGroup>
                                        <Label htmlFor="civilStatus">Civil Status</Label>
                                        <Input type="select" name="civilStatus" id="civilStatus">
                                            <option value="1">Single</option>
                                            <option value="2">Married</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col xs="3">
                                    <FormGroup>
                                        <Label htmlFor="contactNumber">Contact No.</Label>
                                        <Input type="text" id="contactNumber" name="contactNumber" required />
                                    </FormGroup>
                                </Col>
                                <Col xs="3">
                                    <FormGroup>
                                        <Label htmlFor="philHealthNo">PhilHealth No.</Label>
                                        <Input type="text" id="philHealthNo" name="philHealthNo" required />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="3">
                                    <FormGroup>
                                        <Label htmlFor="personToContact">Person to contact</Label>
                                        <Input type="text" id="personToContact" name="personToContact" />
                                    </FormGroup>
                                </Col>
                                <Col xs="3">
                                    <FormGroup>
                                        <Label htmlFor="personToContactNo">Person to contact Contact No.</Label>
                                        <Input type="text" id="personToContactNo" name="personToContactNo" required />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <Button type="submit" size="md" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                        </CardFooter>

                        </Form>
                    </Card>
                </Col>
                </Row></div>;
    }
}

export default Patients;
