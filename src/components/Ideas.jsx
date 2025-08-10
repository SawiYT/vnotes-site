import config from '../config/config.json';
import IdeasComponent from './IdeasComponent';
import PropoComponent from './PromoComponent';

const Ideas = () => {
	return (
		<div
			id='about'
			className='relative bg-black h-auto pb-40 w-full bg-[radial-gradient(#363232_1.5px,transparent_0)] bg-[40px_40px] bg-position-[-19px_-19px]'>
			<div className='flex flex-col w-full h-full max-w-6xl mx-auto px-6 sm:px-12 justify-center items-center pt-20 text-white'>
				<div className='w-full'>
					{/* Grid z 1 kolumną na telefon i 2 na większych */}
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full'>
						{config.ideas.items.map((item, index) => (
							<IdeasComponent key={index} title={item.title} description={item.description} image={item.image} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ideas;
