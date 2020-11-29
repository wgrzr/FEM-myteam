import React from "react";
import {
	Container,
	Header,
	Headline,
	Content,
	Quote,
	Text,
	Name,
	Position,
	Icon,
} from "./styles/testimonials";
import kady from "./assets/avatar-kady.jpg";
import arthur from "./assets/avatar-arthur.jpg";
import aiysha from "./assets/avatar-aiysha.jpg";

function Testimonials() {
	return (
		<Container>
			<Header>
				<Headline>
					Delivering real results for top companies. Some of our success stories.
				</Headline>
			</Header>
			<Content>
				<Quote>
					<Text>
						“The team perfectly fit the specialized skill set required. They focused on
						the most essential features helping us launch the platform eight months
						faster than planned.”
					</Text>
					<Name>Kady Baker</Name>
					<Position>Product Manager at Bookmark</Position>
					<Icon>
						<img src={kady} alt='user icon' />
					</Icon>
				</Quote>
				<Quote>
					<Text>
						“We needed to automate our entire onboarding process. The team came in and
						built out the whole journey. Since going live, user retention has gone
						through the roof!”
					</Text>
					<Name>Aiysha Reese</Name>
					<Position>Founder of Manage</Position>
					<Icon>
						<img src={aiysha} alt='user icon' />
					</Icon>
				</Quote>
				<Quote>
					<Text>
						“Amazing. Our team helped us build an app that delivered a new experience
						for hiring a physio. The launch was an instant success with 100k downloads
						in the first month.”
					</Text>
					<Name>Arthur Clarke</Name>
					<Position>Co-founder of MyPhysio</Position>
					<Icon>
						<img src={arthur} alt='user icon' />
					</Icon>
				</Quote>
			</Content>
		</Container>
	);
}

export default Testimonials;
