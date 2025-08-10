import React, { useState, useEffect } from 'react';
import config from '../config/config.json';
import NavElement from './NavElement';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('');
	const [navbarOpacity, setNavbarOpacity] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;

			if (
				scrollPosition >= document.querySelector('#about')?.offsetTop - 100 &&
				scrollPosition < document.querySelector('#info')?.offsetTop - 100
			) {
				setActiveSection('#about');
			} else if (scrollPosition >= document.querySelector('#info')?.offsetTop - 100) {
				setActiveSection('#info');
			} else {
				setActiveSection('#home');
			}
			if (scrollPosition > 50) {
				setNavbarOpacity(0.8);
			} else {
				setNavbarOpacity(0);
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<nav className='fixed top-0 left-0 w-full z-50' style={{ transition: 'background-color 0.3s ease' }}>
			<div
				className='relative w-full mx-auto flex justify-between items-center p-4'
				style={{
					backgroundColor: `rgba(0, 0, 0, ${navbarOpacity})`,
				}}>
				<button className='lg:hidden text-white p-2' onClick={toggleMenu}>
					<svg
						className='w-8 h-8'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
					</svg>
				</button>
				<div className='flex mx-auto max-w-6xl px-6 sm:px-12 items-center w-full'>
					<div className='hidden lg:flex justify-between items-center'>
						<p className='relative leading-tight font-bold  font-raleway mx-3 text-center text-[--primary] text-2xl'>
							<p className=' text-center text-lg font-black'>
								{config.navbar.logo.highlightedText}
								<span className='text-white text-lg '>{config.navbar.logo.plainText}</span>
							</p>
						</p>
					</div>

					<div className='flex justify-between w-full items-center'>
						<div className='hidden lg:flex justify-between items-center'>
							{config.navbar.links.primary.map((link, index) => (
								<NavElement
									key={index}
									content={link.label}
									scrollToId={link.href}
									active={activeSection === link.href}
								/>
							))}
						</div>
						<div className='hidden lg:flex justify-between items-center'>
							{config.navbar.links.secondary.map((link, index) => (
								<NavElement
									key={index}
									content={link.label}
									scrollToId={link.href}
									active={activeSection === link.href}
								/>
							))}
						</div>
					</div>
				</div>

				<div className={`lg:hidden fixed top-0 left-0 w-full h-full z-40 ${menuOpen ? 'block' : 'hidden'}`}>
					<div className='absolute top-0 left-0 w-full h-full bg-black opacity-50' onClick={toggleMenu}></div>
					<div className='flex flex-col items-center justify-center h-full z-50'>
						{config.navbar.links.primary.map((link, index) => (
							<NavElement
								key={`primary-${index}`}
								content={link.label}
								scrollToId={link.href}
								active={activeSection === link.href}
							/>
						))}
						{config.navbar.links.secondary.map((link, index) => (
							<NavElement
								key={`secondary-${index}`}
								content={link.label}
								scrollToId={link.href}
								active={activeSection === link.href}
							/>
						))}
					</div>
					<button className='absolute top-4 right-4 text-white text-3xl' onClick={toggleMenu}>
						<svg fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
						</svg>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
