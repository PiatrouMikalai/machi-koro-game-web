import React, { useState } from 'react';
import Input from '../Input/Input';
import Label from '../Input/Label';
import Button from '../Button';

import {
  InputMessage,
  InputWithLabelContainer,
  InputValidationContainer,
} from '../Input/styled';
import {
  FormElementContainer,
  RouteMessage,
  Title,
} from '../../containers/LoginPage/styled';
import { PasswordTitleContainer } from './styled';
import { RouterLink } from '../Link/styled';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSingIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Title>Sign in to your account</Title>
      <form onSubmit={handleSingIn}>
        <InputValidationContainer error={error}>
          <Label htmlFor="email">Email</Label>
          <InputWithLabelContainer>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={setEmail}
            />
          </InputWithLabelContainer>
          <InputMessage>validation message</InputMessage>
        </InputValidationContainer>
        <FormElementContainer>
          <InputValidationContainer error={error}>
            <PasswordTitleContainer>
              <Label htmlFor="password">Password</Label>
              {/*<Link href="#">Forgot password?</Link>*/}
            </PasswordTitleContainer>
            <InputWithLabelContainer>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={setPassword}
              />
            </InputWithLabelContainer>
            <InputMessage>validation message</InputMessage>
          </InputValidationContainer>
        </FormElementContainer>
        <FormElementContainer>
          <Button type="submit">Sign in</Button>
        </FormElementContainer>
      </form>
      <RouteMessage>
        Don’t have an account yet?&nbsp;
        <RouterLink to="/signup">Sign up</RouterLink>
      </RouteMessage>
    </>
  );
}

export default LogIn;
