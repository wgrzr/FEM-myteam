import styled from "styled-components";
import img from "../assets/bg-pattern-home-6-about-5.svg";

export const Container = styled.div`
	background: url(${img}) no-repeat;
	background-position: 0 178px;
	background-color: #f67e7e;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 300px;
`;

export const Wrapper = styled.div`
	margin: 1rem 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
`;

export const H1 = styled.h1`
	color: #012f34;
	padding-bottom: 1rem;
  font-size: 32px;
  font-weight: 700;
`;

export const Button = styled.div`
	border: 2px solid #012f34;
	border-radius: 40px;
	width: 160px;
	padding: 0.8rem;
  margin-bottom: 1rem;
	text-align: center;
	a {
		padding: 0;
		text-decoration: none;
		color: #012f34;
    font-size: 18px;
    font-weight: 600;
	}
	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}
`;
