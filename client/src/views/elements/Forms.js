import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row, Card, CardBody } from 'reactstrap';

let baseURL = 'https://rocky-basin-96559.herokuapp.com' || 'http://localhost:3003';

export default class FormsPage extends Component {
  state = {
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    profileDescription: '',
  }

  handleChange = (event) => {
    this.setState({
        [event.currentTarget.id]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    let firstName = this.state.firstName
    if (!this.state.firstName) {
      firstName = this.props.userData.firstName;
    };
    let lastName = this.state.lastName
    if (!this.state.lastName) {
      lastName = this.props.userData.lastName;
    };
    let companyName = this.state.companyName
    if (!this.state.companyName) {
      companyName = this.props.userData.companyName;
    };
    let profileDescription = this.state.profileDescription
    if (!this.state.profileDescription) {
      profileDescription = this.props.userData.profileDescription;
    };
    fetch(baseURL + '/api/update', {
        method: 'PUT',
        body: JSON.stringify({ 
          firstName: firstName,
          lastName: lastName,
          companyName: companyName,
          authId: this.props.userData.authId,
          profileDescription: profileDescription,
          imageURL: this.props.imageUrl,
          imageAlt: this.props.imageAlt,
        }),
        headers:  {
            'Content-Type': 'application/json'
        }
    }).then(res =>  {
        return res.json()
    }).then(data =>  {
      console.log('this is the passed user data: ', data);
        // this.setState({
        //     name: '',
        // })
    }).catch(error =>  console.log({'Error': error}))
  }

  

  render() {
    return (
      <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <Card style={{ boxShadow:'none' }}>
                <CardBody>
        <Form>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input type="text" name="firstName" id="firstName" placeholder={ this.props.userData.lastName ? this.props.userData.firstName : "Enter First Name" } onChange={ (evt) => this.handleChange(evt) }/>
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input type="text" name="lastName" id="lastName"  placeholder={ this.props.userData.lastName ? this.props.userData.lastName : "Enter Last Name" } onChange={ (evt) => this.handleChange(evt) }/>
        </FormGroup>
        <FormGroup>
          <Label for="companyName">Company / Brand Name</Label>
          <Input type="text" name="companyName" id="companyName" placeholder={ this.props.userData.companyName ? this.props.userData.companyName : "Enter Company / Brand Name" } onChange={ (evt) => this.handleChange(evt) }/>
        </FormGroup>
        {/* <FormGroup>
          <Label for="email">Email Address</Label>
          <Input type="email" name="email" id="email" placeholder={ this.props.userData.email ? this.props.userData.email : "Enter Email" } onChange={ (evt) => this.handleChange(evt) }/>
        </FormGroup> */}
        <FormGroup>
          <Label for="profileDescription">Profile Description</Label>
          <Input type="textarea" name="profileDescription" id="profileDescription" placeholder={ this.props.userData.profileDescription ? this.props.userData.profileDescription : "Why did you join Get Mads and start fighting the climate madness?" } onChange={ (evt) => this.handleChange(evt) }/>
        </FormGroup>
        {/* <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option one is this and that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup> */}
        <Button onClick={ (evt) =>  this.handleSubmit(evt) } >Update Profile</Button>
      </Form>
      </CardBody>
      </Card>
      </Col>
      </Row>
    )
  }
}
