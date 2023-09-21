import React, {useState} from 'react';
import Input from '../Input/Input';
import Label from '../Input/Label';
import Link from '../Link';

import { InputWithLabelContainer } from '../Input/Input.styled';
import { Button } from '../Button/styled';
import { FormElementContainer, RouteMessage, Title } from '../../containers/LoginPage/styled';
import { PasswordTitleContainer } from './styled';

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSingIn = () => {

    };

    return (
        <>
            <Title>Sign in to your account</Title>
            <div>
                <Label htmlFor="email">Email</Label>
                <InputWithLabelContainer>
                    <Input id="email" name="email" type="email" value={email} onChange={setEmail}/>
                </InputWithLabelContainer>
            </div>
            <FormElementContainer>
                <PasswordTitleContainer>
                    <Label htmlFor="password">Password</Label>
                    <Link href="#">Forgot password?</Link>
                </PasswordTitleContainer>
                <InputWithLabelContainer>
                    <Input id="password" name="password" type="password" value={password} onChange={setPassword}/>
                </InputWithLabelContainer>
            </FormElementContainer>
            <FormElementContainer>
                <Button type="button" onClick={handleSingIn}>Sign in</Button>
            </FormElementContainer>
            <RouteMessage>Don’t have an account yet? <Link href="/signup">Sign up</Link></RouteMessage>
        </>
    );
}

export default LogIn;
