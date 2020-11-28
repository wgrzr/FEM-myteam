import styled from "styled-components";
import img from "../assets/bg-pattern-about-1-mobile-nav-1.svg";

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 100vw;
  height: 100vh;
  transition: background-color 0.3s ease-in-out;
	background-color: ${({ open }) => (open ? "hsla(0, 0%, 0%, 0.5)" : "")};
`;

export const Panel = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	right: 0;
	top: 0;
	height: 100vh;
	width: 255px;
  background-color: #2c6269;
	transition: transform 0.4s ease-in-out;
  transform: translateX(100%);
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

	a {
		text-decoration: none;
		color: #ffffff;
		font-size: 18px;
		font-weight: 600;
		padding-bottom: 1.8rem;
	}
`;

export const List = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 110px;
	margin-left: 3.4rem;
	a {
		&:hover {
			opacity: 0.5;
		}
	}
`;

export const Button = styled.div`
	border: 2px solid #fff;
	border-radius: 40px;
	width: 160px;
	margin-top: 0.25rem;
	margin-left: 3rem;
	padding: 0.8rem;
	text-align: center;
	a {
		padding: 0;
	}
	&:hover {
		cursor: pointer;
		opacity: 0.5;
	}
`;

export const BackgroundImage = styled.div`
	background: url(${img}) no-repeat;
	background-size: cover;
	width: 200px;
	height: 200px;
	position: absolute;
	bottom: 0;
	right: -42.5%;
`;
