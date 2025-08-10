import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import ServerShow from './components/InfoShow.jsx';
import About from './components/About.jsx';
import './components/css/RgbDivider.css';
import Promo from './components/Promo.jsx';
import Ideas from './components/Ideas.jsx';

const App = () => {
	return (
		<div className=' font-customFont'>
			<Navbar />
			<Header />
			<ServerShow />
			<About />
			<Promo />
			<Ideas />
			<Footer />
		</div>
	);
};

export default App;
