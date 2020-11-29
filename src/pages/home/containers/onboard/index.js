import React from "react";
import {
	Container,
	HeadWrap,
	Header,
	Marker,
	Headline,
	Content,
	Item,
	Icon,
	H1,
	Body,
} from "./styles/onboard";

import person from "./assets/icon-person.svg";
import cog from "./assets/icon-cog.svg";
import chart from "./assets/icon-chart.svg";

export default function Onboard() {
	return (
		<>
			<Container>
				<HeadWrap>
					<Header>
						<Marker />
						<Headline>Build & manage distributed teams like no one else.</Headline>
					</Header>
				</HeadWrap>
				<Content>
					<Item>
						<Icon src={person} />
						<H1>Experienced Individuals</H1>
						<Body>
							Our network is made up of highly experienced professionals who are
							passionate about what they do.
						</Body>
					</Item>
					<Item>
						<Icon src={cog} />
						<H1>Easy to Implement</H1>
						<Body>
							Our processes have been refined over years of implementation meaning our
							teams always deliver.
						</Body>
					</Item>
					<Item>
						<Icon src={chart} />
						<H1>Enhanced Productivity</H1>
						<Body>
							Our customized platform with in-built analytics helps you manage your
							distributed teams.
						</Body>
					</Item>
				</Content>
			</Container>
		</>
	);
}
