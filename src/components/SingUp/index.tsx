import React, { useState } from 'react';
import Label from '../Input/Label';
import Input from '../Input/Input';
import Link from '../Link';

import { FormElementContainer, RouteMessage, Title } from '../../containers/LoginPage/styled';
import { InputWithLabelContainer } from '../Input/Input.styled';
import { Button } from '../Button/styled';
import { TermsOfServiceTitle } from './styled';

function SingUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSingUp = () => {

    };

    return (
        <>
            <Title>Create Account</Title>
            <div>
                <Label htmlFor="username">Username</Label>
                <InputWithLabelContainer>
                    <Input id="username" name="username" type="username" value={username} onChange={setUsername}/>
                </InputWithLabelContainer>
            </div>
            <FormElementContainer>
                <Label htmlFor="email">Email</Label>
                <InputWithLabelContainer>
                    <Input id="email" name="email" type="email" value={email} onChange={setEmail}/>
                </InputWithLabelContainer>
            </FormElementContainer>
            <FormElementContainer>
                <Label htmlFor="password">Password</Label>
                <InputWithLabelContainer>
                    <Input id="password" name="password" type="password" value={password} onChange={setPassword}/>
                </InputWithLabelContainer>
            </FormElementContainer>
            <TermsOfServiceTitle>
                <input type="checkbox"/> I have read and agree to the <Link style={{fontWeight: 400}} href="#">Terms of Service</Link>
            </TermsOfServiceTitle>
            <FormElementContainer>
                <Button type="button" onClick={handleSingUp}>Sign Up</Button>
            </FormElementContainer>
            <RouteMessage>Already have an account? <Link href="/login">Lon in</Link></RouteMessage>
        </>
    );
}

export default SingUp;
