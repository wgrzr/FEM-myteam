import React from "react";
import { Container, Header, Body, Highlight, Content, BackgroundImage } from "./styles/hero";

export default function Hero({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Hero.Content = function HeroContent({ children, ...restProps }) {
	return <Content {...restProps}>{children}</Content>;
};

Hero.Header = function HeroHeader({ children, ...restProps }) {
	return <Header {...restProps}>{children}</Header>;
};

Hero.Highlight = function HeroHighlight({ children, ...restProps }) {
	return <Highlight {...restProps}>{children}</Highlight>;
};

Hero.Body = function HeroBody({ children, ...restProps }) {
	return <Body {...restProps}>{children}</Body>;
};

Hero.BackgroundImage = function HeroBackgroundImage({ ...restProps }) {
	return <BackgroundImage {...restProps} />;
};
