import styled from "styled-components";
import img from "../assets/bg-pattern-home-3.svg";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	background: #012f34;
	padding: 0 1rem;
`;

// export const BackgroundImageTop = styled.div`
// 	background-size: cover;
// 	width: 100px;
// 	height: 244px;
// 	display: inline-block;
// `;

export const HeadWrap = styled.div`
	background: url(${img}) no-repeat;
	background-position: 157.5% 0;
	width: 100vw;
`;

export const Header = styled.div`
	margin: 4rem 10rem 4rem 1.5rem;
`;

export const Marker = styled.div`
	width: 50px;
	height: 4px;
	background-color: #f67e7e;
	margin-bottom: 2rem;
`;

export const Headline = styled.h1`
	font-size: 32px;
	font-weight: 700;
	line-height: 32px;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 65px;
`;

export const Item = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	margin-bottom: 3rem;
`;

export const Icon = styled.img``;

export const H1 = styled.h1`
	margin: 1rem 0 0.5rem 0;
	font-size: 18px;
	font-weight: 700;
	color: #f67e7e;
	line-height: 28px;
`;

export const Body = styled.p`
	font-size: 15px;
	line-height: 25px;
	font-weight: 600;
	padding: 0 10px;
`;
