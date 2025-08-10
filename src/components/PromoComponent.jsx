const PropoComponent = ({ title, description, showDivider = false }) => {
	return (
		<div className='w-[32rem]'>
			<div className='flex justify-center relative border-2 border-black rounded-lg cursor-pointer overflow-hidden shadow-[5px_5px_0px_1px_black] transition-transform duration-100 ease-in-out '>
				<div className='flex flex-col items-start to-transparent px-4 pt-4'>
					<div className='text-2xl flex items-center gap-4 font-raleway font-bold text-white shadow-md mb-2'>
						{title}
					</div>
					<p className='opacity-65 text-white  text-xl text-md shadow-sm shadow-black w-full'>{description}</p>
				</div>
			</div>
			{showDivider && <hr className='my-4 border-t border-white opacity-50' />}
		</div>
	);
};

export default PropoComponent;
