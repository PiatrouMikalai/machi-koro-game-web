import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Label from '../Input/Label';
import Link from '../Link';
import { Checkbox } from '../Checkbox/styled';
import Button from '../Button';

import {
  FormElementContainer,
  RouteMessage,
  Title,
} from '../../containers/LoginPage/styled';
import {
  Input,
  InputIconContainer,
  InputMessage,
  InputWithLabelContainer,
} from '../Input/styled';
import { TermsOfServiceTitle } from './styled';
import { RouterLink } from '../Link/styled';
import { EMAIL } from '../../utils/regexp';
import { ThemeProvider } from 'styled-components';
import { PiEyeClosedLight, PiEyeLight } from 'react-icons/pi';

interface SignUpForm {
  username: string;
  email: string;
  password: string;
  isAgreedWithTerms: boolean;
}

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    mode: 'onSubmit',
    defaultValues: {
      username: '',
      email: '',
      password: '',
      isAgreedWithTerms: false,
    },
  });

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  console.error(errors);

  const handleSingUp: SubmitHandler<SignUpForm> = (data) => {
    console.log(data);
  };

  const errorProvider = (isFieldError: boolean) =>
    isFieldError ? { error: '#f56565' } : {};

  return (
    <>
      <Title>Create Account</Title>
      <form onSubmit={handleSubmit(handleSingUp)}>
        <ThemeProvider theme={() => errorProvider(!!errors?.username)}>
          <Label htmlFor="username">Username</Label>
          <InputWithLabelContainer>
            <Input
              id="username"
              {...register('username', {
                required: 'Username is required',
                // validate: {
                //   matchPattern: (value) =>
                //     EMAIL.test(value) || 'Please enter a valid email address',
                // },
              })}
            />
          </InputWithLabelContainer>
          <InputMessage>{errors?.username?.message}</InputMessage>
        </ThemeProvider>
        <FormElementContainer>
          <ThemeProvider theme={() => errorProvider(!!errors?.email)}>
            <Label htmlFor="email">Email</Label>
            <InputWithLabelContainer>
              <Input
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  validate: {
                    matchPattern: (value) =>
                      EMAIL.test(value) || 'Please enter a valid email address',
                  },
                })}
              />
            </InputWithLabelContainer>
            <InputMessage>{errors?.email?.message}</InputMessage>
          </ThemeProvider>
        </FormElementContainer>
        <FormElementContainer>
          <ThemeProvider theme={() => errorProvider(!!errors?.password)}>
            <Label htmlFor="password">Password</Label>
            <InputWithLabelContainer position="relative">
              <Input
                id="password"
                type={isPasswordVisible ? 'text' : 'password'}
                {...register('password', { required: 'Password is required' })}
              />
              <InputIconContainer
                width="3rem"
                onClick={() => setPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <PiEyeLight size="1.25rem" />
                ) : (
                  <PiEyeClosedLight size="1.25rem" />
                )}
              </InputIconContainer>
            </InputWithLabelContainer>
            <InputMessage>{errors?.password?.message}</InputMessage>
          </ThemeProvider>
        </FormElementContainer>
        <FormElementContainer>
          <ThemeProvider
            theme={() => errorProvider(!!errors?.isAgreedWithTerms)}
          >
            <TermsOfServiceTitle>
              <Checkbox
                {...register('isAgreedWithTerms', {
                  required: 'Accept Terms and Conditions is required',
                })}
              />
              &nbsp;I have read and agree to the&nbsp;
              <Link href="#">Terms and Conditions</Link>
            </TermsOfServiceTitle>
            <InputMessage>{errors?.isAgreedWithTerms?.message}</InputMessage>
          </ThemeProvider>
        </FormElementContainer>
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

export default SignUp;
