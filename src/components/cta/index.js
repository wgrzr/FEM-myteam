import React from "react";
import { Link } from "react-router-dom";

import { Container, Wrapper, H1, Button } from "./styles/cta";

function CTA() {
	return (
		<Container>
			<Wrapper>
				<H1>Ready to get started?</H1>
				<Button>
					<Link to='/contact'>contact us</Link>
				</Button>
			</Wrapper>
		</Container>
	);
}

export default CTA;
