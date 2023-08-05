import React, { useState } from 'react';
import { Form,Container, Row, Col } from 'react-bootstrap';
import './Form.css';

function FormComponent() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      selectedOption &&
      firstName &&
      lastName &&
      (selectedOption === 'number' ? phoneNumber : email)
    ) {
      setIsFormComplete(true);
      console.log('Form submitted:', {
        selectedOption,
        firstName,
        lastName,
        phoneNumber,
        email,
      });

      setSelectedOption('');
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setEmail('');
    } else {
      setIsFormComplete(false);
    }
  };

  return (
    <Container className='container' style={{marginTop:'50px',boxShadow:'5px 5px 10px gray'}} >
      <Form onSubmit={handleSubmit}>
        <Row className='wrapper' style={{marginTop:'30px'}}>
          <Col xs={12} md={6}>
            <Form.Group controlId='firstName'>
              <Form.Label className='d-inline'>First Name</Form.Label>
              <Form.Control
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='click d-inline'
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId='lastName'>
              <Form.Label className='d-inline'>Last Name</Form.Label>
              <Form.Control
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className='click d-inline'
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className='wrapper'>
          <Col xs={12}  md={6} >
          <h4 style={{marginTop:'40px'}}>How should we contact you?</h4>
          <Form.Group style={{marginBottom:'50px'}}>
            <Form.Check
              type='radio'
              label='Phone Number'
              value='number'
              checked={selectedOption === 'number'}
              onChange={handleOptionChange}
              className='radio d-inline'
            />
            <Form.Check
              type='radio'
              label='Email Address'
              value='email'
              checked={selectedOption === 'email'}
              onChange={handleOptionChange}
              className='radio d-inline'
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} style={{marginTop:'20px'}}>
        {selectedOption === 'number' && (
          <Form.Group className='item'>
            <Form.Label className='d-inline'>Phone Number</Form.Label>
            <Form.Control
              type='number'
              value={phoneNumber}
              className='click d-inline'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
        )}
        
        {selectedOption === 'email' && (
          <Form.Group className='item'>
            <Form.Label className='d-inline'>Email Address</Form.Label>
            <Form.Control
              type='email'
              value={email}
              className='click d-inline'
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        )}
        </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default FormComponent;


