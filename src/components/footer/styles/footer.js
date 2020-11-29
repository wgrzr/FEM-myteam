import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: #002529;
  padding: 65px 0;
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Nav = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
  margin-top: 25px;
  margin-bottom: 25px;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    padding: 0 0.5rem;
  }
`;

export const Address = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
  margin-bottom: 40px;
  opacity: 60%;

  span {
    font-size: 15px;
    font-weight: 600;
    line-height: 25px;
  }
`;

export const Socials = styled.div`
	margin-bottom: 20px;
	img {
		padding: 0 .45rem;

	}
`;

export const Copyright = styled.h4`
  font-size: 15px;
  font-weight: 600;
  opacity: 60%;
`
