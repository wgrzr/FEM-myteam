import React from "react";
import { Header, Hero } from "../../components";
import { Onboard, Testimonials } from "./containers";

export default function Home() {
	return (
		<>
			<Header />
			<Hero>
				<Hero.Content>
					<Hero.Header>
						Find the best
						<Hero.Highlight> talent</Hero.Highlight>
					</Hero.Header>
					<Hero.Body>
						Finding the right people and building high performing teams can be hard.
						Most companies aren’t tapping into the abundance of global talent. We’re
						about to change that.
					</Hero.Body>
				</Hero.Content>
				<Hero.BackgroundImage />
			</Hero>
			<Onboard />
			<Testimonials />
		</>
	);
};
