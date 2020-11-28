import React from "react";
import { Link } from "react-router-dom";
import { Panel, List, Button, Overlay, BackgroundImage } from "./styles/sidebar";

export default function Sidebar({ open }) {
	return (
		<Overlay open={open}>
			<Panel open={open}>
				<List>
					<Link to='/'>home</Link>
					<Link to='/about'>about</Link>
				</List>
				<Button>
					<Link to='/contact'>contact us</Link>
				</Button>
				<BackgroundImage />
			</Panel>
		</Overlay>
	);
}
