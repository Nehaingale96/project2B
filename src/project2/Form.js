import React, { useState } from 'react';
import './Form.css';

function Form() {
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
    <form onSubmit={handleSubmit} className='container'>
      <div className='wrapper'>
        <label className='firstName'>
          First Name<br />
          <input
            type='text'
            value={firstName}
            className='click'
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label className='lastName'>
          Last Name<br />
          <input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='click'
          />
        </label>
      </div>
      <div className='radioWrapper'>
        <h1>How should we contact you?</h1>
        <div>
          <label style={{margin:"20px"}} className='label'>
            <input
              type='radio'
              value='number'
              checked={selectedOption === 'number'}
              onChange={handleOptionChange}
              className='radio'
            />
            Phone Number
          </label>
        </div>
        <div>
          <label className='label'>
            <input
              type='radio'
              value='email'
              checked={selectedOption === 'email'}
              onChange={handleOptionChange}
              className='radio'
            />
            Email Address
          </label>
        </div>
      </div>
      {selectedOption === 'number' && (
        <div className='item'>
          <label >Phone Number</label>
          <input
            type='number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      )}
      {selectedOption === 'email' && (
        <div className='item'>
          <label style={{ margin: '20px' }}>Email Address</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      )}
      {/* {isFormComplete === false && (
        <p style={{ color: 'red' }}>Please fill all details.</p>
      )} */}
      <button type='submit' style={{margin:'80px'}}>Submit</button>
    </form>
  );
}

export default Form;