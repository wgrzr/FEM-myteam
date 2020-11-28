import styled from "styled-components";
import img from "../assets/bg-pattern-home-2.svg"

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100vw;
	height: 490px;
`;

export const Content = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-top: 50px;
`;

export const Header = styled.h1`
	padding: 0 4rem;
	font-size: 40px;
`;

export const Body = styled.p`
	line-height: 2rem;
	font-size: 15px;
	font-weight: 600;
	margin: 1rem 1.4rem;
`;

export const Highlight = styled.span`
	color: hsl(360, 87%, 73%);
`;

export const BackgroundImage = styled.div`
	background: url(${img}) no-repeat;
	background-size: cover;
	width: 100vw;
	height:  95px;
`;
