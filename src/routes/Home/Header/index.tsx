import React, { useState } from 'preact/compat';
import { Fragment, h } from 'preact';
import { Container, Nav } from './style';
import Link from '../../../components/ui-kit/Link';
import { ButtonTypes } from '../../../components/ui-kit/Button/Button.interfaces';
import Button from '../../../components/ui-kit/Button';
import ModalHeader from './ModalHeader';

const Header: React.FC = () => {
	
	const [open, setOpen] = useState<boolean>(true);

	return(
	<Fragment>
		{open && <ModalHeader setOpen={setOpen} />}
		<Container>
			<img src='/assets/images/Logo.svg' alt='Logo' />
			<Nav>
				<Link title='Use Cases' link='/' />
				<Link title='About' link='/about' />
				<Link title='Pricing' link='/' />
				<Link title='Blog' link='/' />
			</Nav>
			<Nav gap="10px">
				<Button buttonType={ButtonTypes.Outline} > Login </Button>
				<Button buttonType={ButtonTypes.Fill} >Sign Up</Button>
			</Nav>
		</Container>
	</Fragment>
)};

export default Header;
