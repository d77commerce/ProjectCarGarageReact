import { ControlContainer, Input, Label } from '../styledComponents/StyledComponents';
import { useState } from 'react';
import './NewAccount.css';


export default function NewAccount() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

    return (
        <div id="auth-inputs">
      <ControlContainer>

        <p>
            <Label >Name</Label>
            <Input 
                type="text"
             
                onChange={(event) => handleInputChange('name', event.target.value)}
            />
        </p>
        <p>
            <Label >Last Name</Label>
            <Input 
                type="text"
             
                onChange={(event) => handleInputChange('lastName', event.target.value)}
            />  
        </p>
        <p>
            <Label >Phone</Label>
            <Input 
                type="number"
             
                onChange={(event) => handleInputChange('phone', event.target.value)}
            />
        </p>
        <p>
          <Label $props = {emailNotValid}>Email</Label>
          <Input $props = {emailNotValid}
            type="email"
           
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <Label  $props = {passwordNotValid}>Password</Label>
          <Input  $props = {passwordNotValid}
            type="password"
          
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </ControlContainer>
      <div className="actions">
      
        <button className='button' onClick={handleLogin}>Create</button>
      </div>
    </div>
    )   
}