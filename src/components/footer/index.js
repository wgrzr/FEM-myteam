import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Address, Socials, Copyright, Nav } from "./styles/footer";
import facebook from "./assets/icon-facebook.svg";
import twitter from "./assets/icon-twitter.svg";
import pinterest from "./assets/icon-pinterest.svg";
import logo from "./assets/logo.svg";

function Footer() {
	return (
		<Container>
			<Header>
				<img src={logo} alt='myteam logo' width='96px' height='24px' />
				<Nav>
					<Link to='/'>home</Link>
					<Link to='/about'>about</Link>
				</Nav>
			</Header>
			<Address>
				<span>987 Hillcrest Lane</span>
				<span>Irvine, CA</span>
				<span>California 92714</span>
				<span>Call Us: 949-833-7432</span>
			</Address>
			<Socials>
				<img src={facebook} alt='' />
				<img src={pinterest} alt='' />
				<img src={twitter} alt='' />
			</Socials>
			<Copyright>Copyright 2020. All Rights Reserved</Copyright>
		</Container>
	);
}

export default Footer;
