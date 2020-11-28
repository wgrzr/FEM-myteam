import React, { useState } from "react";
import { Container, Logo, MenuIcon } from "./styles/header";
import Sidebar from "../sidebar";

import mtLogo from "./assets/logo.svg";
import menu from "./assets/icon-hamburger.svg";
import close from "./assets/icon-close.svg";

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Sidebar open={open} setOpen={open} />
			<MenuIcon open={open} onClick={() => setOpen(!open)}
				src={open ? close : menu}
				alt='' />
			<Container>
				<Logo src={mtLogo} alt='' />
			</Container>
		</>
	);
}
