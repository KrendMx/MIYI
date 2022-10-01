import React from 'preact/compat';
import { h } from 'preact';
import { ButtonProps } from './Button.interfaces';
import { Container } from './style';

const Button: React.FC<ButtonProps> = ({children, onClick, buttonType, ...props}) => {
  return (
    <Container {...props} onClick={onClick} style={buttonType}>{children}</Container>
  )
}

export default Button;