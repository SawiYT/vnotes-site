const IdeasComponent = ({ title, description, image = false }) => {
	return (
		<div className=' w-auto h-full'>
			<div className='flex justify-center relative border-2 bg-promo rounded-xl border-black  cursor-pointer overflow-hidden shadow-[5px_5px_0px_1px_black] transition-transform duration-100 ease-in-out '>
				<div className='flex flex-col items-start to-transparent px-4 pt-4'>
					<div className='text-2xl flex items-center gap-4 font-raleway font-bold text-white  mb-2'>{title}</div>
					<p className='opacity-65 text-white  text-xl text-md shadow-sm shadow-black w-full'>{description}</p>
					<img src={image} alt='' />
				</div>
			</div>
		</div>
	);
};

export default IdeasComponent;
