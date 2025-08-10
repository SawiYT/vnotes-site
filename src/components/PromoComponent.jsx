const PropoComponent = ({ title, description, showDivider = false }) => {
	return (
		<div className='w-full sm:w-[30rem] md:w-[34rem] max-w-full'>
			<div className='flex justify-center relative border-2 border-black rounded-lg cursor-pointer overflow-hidden shadow-[5px_5px_0px_1px_black] transition-transform duration-100 ease-in-out'>
				<div className='flex flex-col items-start to-transparent px-5 pt-5'>
					<div className='text-xl sm:text-2xl md:text-3xl flex items-center gap-4 font-raleway font-bold text-white shadow-md mb-3'>
						{title}
					</div>
					<p className='opacity-65 text-white text-base sm:text-lg md:text-xl shadow-sm shadow-black w-full break-words'>
						{description}
					</p>
				</div>
			</div>
			{showDivider && <hr className='my-4 border-t border-white opacity-50' />}
		</div>
	);
};

export default PropoComponent;
