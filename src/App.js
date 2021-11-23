import { BrowserRouter} from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import MainContent from './Components/MainContent/MainContent';
import {BlogProvider} from './Components/Context/Context';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';

function App() {
	const theme = createTheme({
		typography: {
		  fontFamily: ['Barlow Semi Condensed']
		},  
		palette: {
			primary: {
				main: '#8e1c4d',
			},
			secondary: {
				main: '#000000',
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<BlogProvider>
				<BrowserRouter>
					<NavBar/>
					<MainContent/>
				</BrowserRouter>
			</BlogProvider>
		</ThemeProvider>
	);
}

export default App;
