import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PiEyeLight, PiEyeClosedLight } from 'react-icons/pi';
import Label from '../Input/Label';
import Button from '../Button';

import {
  Input,
  InputMessage,
  InputWithLabelContainer,
  InputValidationContainer,
  InputIconContainer,
} from '../Input/styled';
import {
  FormElementContainer,
  RouteMessage,
  Title,
} from '../../containers/LoginPage/styled';
import { PasswordTitleContainer } from './styled';
import { RouterLink } from '../Link/styled';
import { EMAIL } from '../../utils/regexp';

interface LoginForm {
  email: string;
  password: string;
}

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleSingIn: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Title>Sign in to your account</Title>
      <form onSubmit={handleSubmit(handleSingIn)} noValidate>
        <InputValidationContainer error={!!errors?.email}>
          <Label htmlFor="email">Email</Label>
          <InputWithLabelContainer>
            <Input
              id="email"
              type="email"
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
        </InputValidationContainer>
        <FormElementContainer>
          <InputValidationContainer error={!!errors?.password}>
            <PasswordTitleContainer>
              <Label htmlFor="password">Password</Label>
              {/*<Link href="#">Forgot password?</Link>*/}
            </PasswordTitleContainer>
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
