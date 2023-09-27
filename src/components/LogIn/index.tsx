import React, { useState } from 'react';
import Input from '../Input/Input';
import Label from '../Input/Label';

import { InputWithLabelContainer } from '../Input/Input.styled';
import { Button } from '../Button/styled';
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

  const handleSingIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Title>Sign in to your account</Title>
      <form onSubmit={handleSingIn}>
        <div>
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
        </div>
        <FormElementContainer>
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
