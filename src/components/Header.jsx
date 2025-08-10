import config from '../config/config.json';

const Header = () => {
	return (
		<div id='home' className='relative h-[50vh] w-full bg-black'>
			<div className='absolute bottom-0 w-full h-40 z-20 bg-gradient-to-b from-transparent to-black'></div>
			<div className='relative z-30 h-full flex font-raleway items-end'>
				<div className='w-full max-w-7xl mx-auto px-6 sm:px-12'>
					<div className=' my-4 '>
						<h1 className='text-white my-2 max-w-[40rem] font-bold text-3xl sm:text-4xl md:text-5xl leading-snug'>
							{config.hero.headline}
						</h1>
						<p className='max-w-xl text-white opacity-75 sm:opacity-80 py-2 text-lg sm:text-xl md:text-4xl'>
							{config.hero.description}
						</p>
					</div>
					<div className=' pb-10'>
						<button className='max-w-xl text-white px-10 py-4 bg-[--primary] rounded-lg'>
							<p className='font-bold '>{config.hero.cta1}</p>
						</button>
						<button className='max-w-xl text-white m-2 px-4 py-2 text-[--primary] '>
							<p className='font-bold '>{config.hero.cta2}</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
