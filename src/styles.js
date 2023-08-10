import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
	color: white;
	background-color: hsl(212, 45%, 89%);
  font-size: calc(10px + 2vmin);
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 80%;
	width: 230px;
	padding: 10px;
	background-color: hsl(0, 0%, 100%);
	border-radius: 16px;
`;

export const Img = styled.img`
  height: auto;
	border-radius: 8px;
  pointer-events: none;
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: ${({ mt }) => (mt ? mt + 'px' : '20px')};
	margin-bottom: ${({ mb }) => (mb ? mb + 'px' : '0px')};
`;

export const Text = styled.text`
	font-weight: ${({ fw }) => (fw ? fw : 400)};
	font-size: ${({ fs }) => (fs ? fs + 'px': '15px')};
	color: ${({ color }) => (color ? color : 'black')};
	text-align: center;
`;