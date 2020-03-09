import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';


class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state.email)
    console.log(this.state.password)
  }

  handleSubmit = () => {
    axios.post()
  }



  render(){
    return (
      <>
     
        <Container className="mt-5 pt-5">
          <Row>
            <Col></Col>
            <Col className="text-center">
              <h3 className="p-2">Login</h3>
              <Form className="text-left">
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange}/>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                </Form.Group>
                <Button className="" variant="primary" type="submit">
                  Submit
                </Button>
              </Form></Col>
            <Col></Col>
  
          </Row>
        </Container>
      </>
    )
  }
  
}


export default Login;