import React, { useState, useEffect } from "react";
import { Container, Logo, MenuIcon } from "./styles/header";
import Sidebar from "../sidebar";
import mtLogo from "./assets/logo.svg";
import menu from "./assets/icon-hamburger.svg";
import close from "./assets/icon-close.svg";

export default function Header() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 10) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	});

	return (
		<>
			<Container scrolled={scrolled} setScrolled={setScrolled}>
				<Sidebar open={open} setOpen={open} />
				<Logo src={mtLogo} alt='' />
				<MenuIcon
					open={open}
					onClick={() => setOpen(!open)}
					src={open ? close : menu}
					alt=''
				/>
			</Container>
		</>
	);
}
