import React, { useState } from 'react';
import Label from '../Input/Label';
import Input from '../Input/Input';
import Link from '../Link';
import Checkbox from '../Checkbox';
import Button from '../Button';

import {
  FormElementContainer,
  RouteMessage,
  Title,
} from '../../containers/LoginPage/styled';
import { InputWithLabelContainer } from '../Input/styled';
import { TermsOfServiceTitle } from './styled';
import { RouterLink } from '../Link/styled';

function SingUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSingUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Title>Create Account</Title>
      <form onSubmit={handleSingUp}>
        <div>
          <Label htmlFor="username">Username</Label>
          <InputWithLabelContainer>
            <Input
              id="username"
              name="username"
              type="username"
              required
              value={username}
              onChange={setUsername}
            />
          </InputWithLabelContainer>
        </div>
        <FormElementContainer>
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
        </FormElementContainer>
        <FormElementContainer>
          <Label htmlFor="password">Password</Label>
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
        <TermsOfServiceTitle>
          <Checkbox required />
          &nbsp;I have read and agree to the&nbsp;
          <Link href="#">Terms of Service</Link>
        </TermsOfServiceTitle>
        <FormElementContainer>
          <Button type="submit">Sign Up</Button>
        </FormElementContainer>
      </form>
      <RouteMessage>
        Already have an account?&nbsp;
        <RouterLink to="/login">Lon in</RouterLink>
      </RouteMessage>
    </>
  );
}

export default SingUp;
