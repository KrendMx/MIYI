import React from 'preact/compat';
import { h } from 'preact';
import { Container, Nav } from './style';
import Link from '../../../components/ui-kit/Link';
import { ButtonTypes } from '../../../components/ui-kit/Button/Button.interfaces';
import Button from '../../../components/ui-kit/Button';

const Header: React.FC = () => (
	<Container>
		<img src='/assets/images/Logo.svg' alt='Logo' />
		<Nav>
			<Link title='Use Cases' link='/' />
			<Link title='About' link='/about' />
			<Link title='Pricing' link='/' />
			<Link title='Blog' link='/' />
		</Nav>
		<Nav gap="10px">
			<Button title="Login" buttonType={ButtonTypes.Fill} />
			<Button title="Sign Up" buttonType={ButtonTypes.Outline} />
		</Nav>
	</Container>
);

export default Header;
