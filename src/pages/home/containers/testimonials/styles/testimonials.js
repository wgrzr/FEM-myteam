import styled from "styled-components";
import quote from "../assets/icon-quotes.svg";
import img from "../assets/bg-pattern-home-4-about-3.svg";
import img2 from "../assets/bg-pattern-home-5.svg";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #004047;
`;

export const Header = styled.div`
	background: url(${img}) no-repeat;
`;

export const Headline = styled.h1`
	text-align: center;
	padding-top: 22vh;
	font-size: 32px;
	line-height: 32px;
	font-weight: 700;
	margin: 0 2rem;
	padding-bottom: 2.5rem;
`;

export const Content = styled.div`
	background: url(${img2}) no-repeat;
	background-position: 100% 100%;
	display: flex;
	flex-direction: column;
	padding: 0 1rem 18vh 1rem;
`;

export const Quote = styled.div`
	background: url(${quote}) no-repeat;
	background-position: top center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding-top: 2rem;
	margin-bottom: 50px;
`;

export const Text = styled.p`
	font-size: 15px;
	line-height: 25px;
	font-weight: 600;
	padding-bottom: 1rem;
`;

export const Name = styled.p`
	font-size: 18px;
	line-height: 28px;
	font-weight: 700;
	padding-bottom: 3px;
	color: #79c8c7;
`;

export const Position = styled.p`
	font-weight: 500;
	font-style: italic;
	padding-bottom: 1rem;
	font-size: 13px;
`;

export const Icon = styled.div`
	border-radius: 50%;
	border: 3px solid #c4fffe;
	width: 70px;
	height: 70px;

	img {
		object-fit: fill;
		width: 100%;
	}
`;
