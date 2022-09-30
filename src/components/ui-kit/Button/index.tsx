import React from 'preact/compat';
import { h } from 'preact';
import { ButtonProps } from './Button.interfaces';
import { Container } from './style';

const Button: React.FC<ButtonProps> = ({title, onClick, buttonType}) => {
  return (
    <Container onClick={onClick} style={buttonType}>{title}</Container>
  )
}

export default Button;