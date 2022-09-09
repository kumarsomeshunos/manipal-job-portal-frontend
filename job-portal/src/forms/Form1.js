import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const Form1 = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='sec sec-1'>
      <div className='heading'>
        <h3>1. Applicant Information</h3>
        <hr />
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <div className='form'>
            <Form.Group as={Col} md='4' controlId='validationCustom01'>
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='First name'
                defaultValue='Mark'
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='4' controlId='validationCustom02'>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Last name'
                defaultValue='Otto'
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='4' controlId='validationCustom02'>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Last name'
                defaultValue='Otto'
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='6' controlId='validationCustom03'>
              <Form.Label>City</Form.Label>
              <Form.Control type='text' placeholder='City' required />
              <Form.Control.Feedback type='invalid'>
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='3' controlId='validationCustom04'>
              <Form.Label>State</Form.Label>
              <Form.Control type='text' placeholder='State' required />
              <Form.Control.Feedback type='invalid'>
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </Row>
      </Form>
    </div>
  );
};
export default Form1;
