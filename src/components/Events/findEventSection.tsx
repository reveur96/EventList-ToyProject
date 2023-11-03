/** @format */

import { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import EventItem from './EventItem';

import { searchedEvent } from '../../util/http';
import LoadingIndicator from '../Ui/Loadingindicator';

export default function FindEventSection() {
	const searchElement = useRef<HTMLInputElement>(null);
	const [searchTerm, setSearchTerm] = useState<undefined | string>();
	const [content, setContent] = useState<JSX.Element | null>(null);

	const { data, status } = useQuery({
		queryKey: ['events', { search: searchTerm }],
		queryFn: () => searchedEvent(searchTerm as string),
		enabled: searchTerm !== undefined,
	});

	let dataStatus = (
		<p className='pt-3'>Please enter a search term to find events.</p>
	);

	if (status === 'pending' && searchTerm) {
		dataStatus = <LoadingIndicator />;
	}

	if (data && !content) {
		const eventsList = (
			<ul className='mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8'>
				{data.map((event) => (
					<li
						className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-300 xl:aspect-h-8 xl:aspect-w-7 p-3'
						key={event?.id}>
						<EventItem event={event} />
					</li>
				))}
			</ul>
		);

		if (data?.length === 0) {
			setContent(
				<p className='pt-3'>can not find any event. please check again.</p>
			);
		} else {
			setContent(eventsList);
		}
	}

	if (status === 'error') {
		dataStatus = <p className='pt-3'>Failed to fetch events.</p>;
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setSearchTerm(searchElement.current?.value);
		setContent(null);
	}

	return (
		<section className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8'>
			<header>
				<h2 className='text-xl font-medium tracking-tight text-white mb-3'>
					Find your next event!
				</h2>
				<form
					onSubmit={handleSubmit}
					className='mt-6 flex max-w-md gap-x-4'>
					<label
						htmlFor='email-address'
						className='sr-only'>
						Email address
					</label>
					<input
						type='search'
						placeholder='please type only event title'
						ref={searchElement}
						className='min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
						required
					/>
					<button
						type='submit'
						className='flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
						Search
					</button>
				</form>
			</header>
			{content || dataStatus}
		</section>
	);
}
