import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	top: 0;
	display: flex;
	width: 100vw;
	align-items: center;
	justify-content: space-between;
  padding: 2.5rem 1rem;
  transition: box-shadow 0.2s ease;
	z-index: ${({ scrolled }) => (scrolled ? "90" : "")};
	background-color: ${({ scrolled }) => (scrolled ? "hsla(185, 100%, 17%, 0.8)" : "")};
	box-shadow: ${({ scrolled }) => (scrolled ? "0 5px 5px #131313" : "")};
`;

export const Logo = styled.img`
	width: 128px;
	height: 32px;
	top: 0;
`;

export const MenuIcon = styled.img`
	position: fixed;
	top: 3rem;
	right: 1rem;
	width: 20px;
	height: 17px;
	z-index: 100;
	&:hover {
		opacity: 0.5;
	}
`;
