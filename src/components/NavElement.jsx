const NavElement = ({ content, active, scrollToId, closeMenu }) => {
	const handleClick = e => {
		e.preventDefault();
		if (scrollToId) {
			const section = document.querySelector(scrollToId);
			if (section) {
				section.scrollIntoView({ behavior: 'smooth' });
			}
		}
		if (closeMenu) {
			closeMenu();
		}
	};

	return (
		<button
			onClick={handleClick}
			className={`relative font-semibold transition-transform transform hover:opacity-100  mx-3 text-white opacity-100 md:opacity-40
      ${active ? 'text-purple-600' : ''}`}>
			<span className={`ml-2 pb-5 text-sm md:text-md lg:text-lg`}>{content}</span>
		</button>
	);
};

export default NavElement;
