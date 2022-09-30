import React from 'preact/compat';
import { h } from 'preact';
import { Container } from './style';
import Link from '../../../components/ui-kit/Link';
import { ButtonTypes } from '../../../components/ui-kit/Button/Button.interfaces';
import Button from '../../../components/ui-kit/Button';

const Header: React.FC = () => (
	<Container>
		<img src='/assets/images/Logo.svg' alt='Logo' />
		<nav>
			<Link title='Use Cases' link='/' />
			<Link title='About' link='/about' />
			<Link title='Pricing' link='/' />
			<Link title='Blog' link='/' />
		</nav>
		<nav>
			<Button title="Login" buttonType={ButtonTypes.Outline} />
			<Button title="Sign Up" buttonType={ButtonTypes.Fill} />
		</nav>
	</Container>
);

export default Header;
