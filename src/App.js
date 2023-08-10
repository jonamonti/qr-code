// import logo from './logo.svg';
import qr from '../src/images/image-qr-code.png';
import { Container, Img, Main, Text, TextContainer } from './styles';

function App() {
  return (
		<Main>
			<Container>
				<Img src={qr} alt="qr"/>
					<TextContainer>
						<Text fw={700} fs={17}>Improve your front-end</Text>
						<Text fw={700} fs={17}>skills by building projects</Text>
				</TextContainer>
				<TextContainer mb={20}>
					<Text fs={12} color='hsl(220, 15%, 55%)'>Scan the QR code to visit Frontend</Text>
					<Text fs={12} color='hsl(220, 15%, 55%)'>Mentor and take your coding skills to</Text>
					<Text fs={12} color='hsl(220, 15%, 55%)'>the next level</Text>
				</TextContainer>
			</Container>
		</Main>
  );
}

export default App;
