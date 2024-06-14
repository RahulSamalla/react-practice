// Login.js

import React, { useState } from 'react';
import { Container, FormContainer, Title, Form, Input, Button } from './LoginStyles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <Container>
      <FormContainer>
        <Title>Login</Title>
        <Form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;
