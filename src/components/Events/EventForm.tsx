/** @format */
import { useNavigate } from 'react-router-dom';

export default function EventForm({ inputData, onSubmit }: any) {
	const navigate = useNavigate();

	let inputDataObj;

	if (inputData) {
		inputDataObj = inputData[0];
	}
	function handleSubmit(event: any) {
		event.preventDefault();

		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		onSubmit({ ...data });
	}

	function handleClose() {
		navigate('../');
	}

	const formattedDate = (dateData: string) => {
		const formattedTime = dateData?.slice(0, 16);
		return formattedTime;
	};

	const eventStartDate = formattedDate(inputDataObj?.start_date);
	const eventEndDate = formattedDate(inputDataObj?.end_date);

	return (
		<div className='isolatebg-gradient-to-tr from-[#190420] to-[#000102] px-6 py-24 sm:py-32 lg:px-8'>
			<div
				className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'
				aria-hidden='true'>
				<div
					className='relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg]  opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
			<div className='mx-auto max-w-2xl text-center'>
				<h2 className='text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl'>
					{inputDataObj
						? 'You can easily edit your event!'
						: 'Create new event!'}
				</h2>
				<p className='mt-2 text-lg leading-8 text-gray-400'>
					Aute magna irure deserunt veniam aliqua magna enim voluptate.
				</p>
			</div>
			<form
				action='#'
				method='POST'
				onSubmit={handleSubmit}
				className='mx-auto mt-16 max-w-xl sm:mt-20'>
				<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
					<div className='sm:col-span-2'>
						<label
							htmlFor='title'
							className='block text-sm font-semibold leading-6 text-gray-200'>
							Event title
						</label>
						<div className='mt-2.5'>
							<input
								type='text'
								id='title'
								name='title'
								defaultValue={inputDataObj?.title ?? ''}
								className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor='start-date'
							className='block text-sm font-semibold leading-6 text-gray-200'>
							Start date
						</label>
						<div className='mt-2.5'>
							<input
								type='datetime-local'
								name='start-date'
								id='start-date'
								defaultValue={eventStartDate ?? ''}
								className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>

					<div>
						<label
							htmlFor='end-date'
							className='block text-sm font-semibold leading-6 text-gray-200'>
							End date
						</label>
						<div className='mt-2.5'>
							<input
								type='datetime-local'
								name='end-date'
								id='end-date'
								defaultValue={eventEndDate ?? ''}
								className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>

					<div className='sm:col-span-2'>
						<label
							htmlFor='location'
							className='block text-sm font-semibold leading-6 text-gray-200'>
							Location
						</label>
						<div className='mt-2.5'>
							<input
								type='text'
								name='location'
								id='location'
								defaultValue={inputDataObj?.location ?? ''}
								className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>

					<div className='sm:col-span-2'>
						<label
							htmlFor='description'
							className='block text-sm font-semibold leading-6 text-gray-200'>
							description
						</label>
						<div className='mt-2.5'>
							<textarea
								id='description'
								name='description'
								defaultValue={inputDataObj?.description ?? ''}
								className='block w-full h-52 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none '
							/>
						</div>
					</div>
				</div>
				<div className='mt-10 flex justify-end'>
					<button
						type='submit'
						className='block w-fit mr-2 rounded-md border border-white px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						onClick={handleClose}>
						Cancel
					</button>
					<button
						type='submit'
						className='block w-fit rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						onSubmit={handleSubmit}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
