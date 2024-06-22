import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/index.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import About from './pages/About';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' Component={Home} />
				<Route path='/projects' Component={Projects} />
				<Route path='/about' Component={About} />
				<Route path='*' Component={NotFound} />
			</Routes>
		</BrowserRouter>
	);
}
