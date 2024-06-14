// LoginStyles.js

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 50vh;
  align-items: center;
  justify-content: flex-end;
`;

export const FormContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
