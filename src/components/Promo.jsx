import config from '../config/config.json';
import PropoComponent from './PromoComponent';

const Promo = () => {
	return (
		<div
			id='about'
			className='relative bg-black h-auto pb-40 w-full bg-[radial-gradient(#363232_1.5px,transparent_0)] bg-[40px_40px] bg-position-[-19px_-19px]'>
			<div className='flex flex-col w-full max-w-6xl mx-auto px-6 sm:px-12 justify-center items-center pt-20 text-white'>
				<div className='flex items-center flex-row justify-between w-full'>
					<div className='flex flex-col gap-4'>
						{config.promo.items.map((item, index) => (
							<PropoComponent
								key={index}
								title={item.title}
								description={item.description}
								showDivider={item.showDivider}
							/>
						))}
					</div>
					<div className='flex justify-center items-center flex-col mr-20'>
						<img className='bg-promo rounded-[3rem] w-52 h-52' src='/logo6.png' alt='' />
						<div className='py-4 text-center font-bold text-2xl '>
							<h1 className=' py-4 text-4xl font-raleway'>vNotes</h1>
							<p>Free wihout limits.</p>
							<button className='text-[--primary]'>Download now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Promo;
