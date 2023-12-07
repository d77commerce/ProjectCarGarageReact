import { useState } from 'react';
import { ControlContainer, Input, Label } from '../styledComponents/StyledComponents';
import { Link } from 'react-router-dom';
export default function AuthInputs() {
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
        <Link to='/NewAccount' type="button"className="text-button">
          Create a new mechanic
        </Link>
        <button className='button' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
