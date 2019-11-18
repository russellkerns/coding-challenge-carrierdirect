import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  padding: 10px 10px 10px 36px;
  color: ${props => props.theme.colors.blue.light}
  font-size: 0.75rem;
  background: #fff url('cupcake.png') 0 0 no-repeat;
  border-radius: 16px;
  border: 1px solid #d9d9d9;
  text-shadow: 1px 1px #fff;
  height: 50px;
  width: 12rem;

`;

interface ButtonProps {
  text: string;
  clickHandler: () => void;
}
const CupcakeButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <ButtonStyle onClick={props.clickHandler}>{props.text}</ButtonStyle>;
};

export default CupcakeButton;
