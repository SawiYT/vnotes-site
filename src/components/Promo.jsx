import config from '../config/config.json';
import PropoComponent from './PromoComponent';

const Promo = () => {
	return (
		<div
			id='about'
			className='relative bg-black h-auto pb-40 w-full 
			overflow-x-hidden  /* <-- blokuje poziomy scroll */
			bg-[radial-gradient(#363232_1.5px,transparent_0)] bg-[40px_40px] bg-position-[-19px_-19px]'>
			<div className='flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-12 justify-center items-center pt-20 text-white'>
				<div className='flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-10'>
					{/* Lewa kolumna */}
					<div className='flex flex-col gap-4 w-full lg:w-1/2'>
						{config.promo.items.map((item, index) => (
							<PropoComponent
								key={index}
								title={item.title}
								description={item.description}
								showDivider={item.showDivider}
							/>
						))}
					</div>

					{/* Prawa kolumna */}
					<div className='flex justify-center items-center flex-col lg:mr-10 w-full lg:w-auto text-center'>
						<img
							className='bg-promo rounded-[3rem] w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52'
							src='/logo6.png'
							alt='Logo'
						/>
						<div className='py-4 font-bold text-lg sm:text-xl md:text-2xl max-w-full break-words'>
							<h1 className='py-4 text-xl sm:text-3xl md:text-4xl font-raleway max-w-full break-words'>vNotes</h1>
							<p className='text-sm sm:text-base max-w-full break-words'>Free without limits.</p>
							<button className='mt-3 px-4 py-2 border border-[--primary] text-[--primary] rounded-lg hover:bg-[--primary] hover:text-black transition'>
								Download now
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Promo;
