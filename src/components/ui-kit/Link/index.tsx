import React from 'preact/compat';
import { route } from 'preact-router';
import { h } from 'preact';
import { Container } from './style';

type LinkProps = {
    link: string;
    title: string;
};

const Link: React.FC<LinkProps> = ({link, title}) => {

  console.log();


  return (
    <Container onClick={() => {
        route(link);
    }}>{title}</Container>
  )
}

export default Link