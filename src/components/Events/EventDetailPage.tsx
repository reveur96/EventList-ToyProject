/** @format */

import { useState, useCallback, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import supabase from '../../lib/supabase-client';
import Header from '../Header.jsx';
import { Events } from '../../../types/collection';

export default function EventDetails() {
	const [events, setEvents] = useState<Events[]>([]);

	const params = useParams();

	let content;

	const fetcher = useCallback(async () => {
		const { data, error } = await supabase
			.from('events')
			.select()
			.eq('id', `${params.id}`);

		if (error) {
			console.log(error);
		} else {
			setEvents(data);
		}
	}, []);

	if (events) {
		events.map((events) => {
			const formattedDate = (dateData: string) => {
				return new Date(dateData).toLocaleDateString('ko', {
					day: 'numeric',
					month: 'short',
					year: 'numeric',
				});
			};

			const createDate = formattedDate(events.created_at);
			const eventsDate = formattedDate(events.date);

			content = (
				<>
					<div className='py-24 sm:py-32'>
						<div className='mx-auto max-w-7xl px-6 lg:px-8 '>
							<article className=' mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-3 pt-3 pb-8 px-5 rounded-lg border border-gray-400 bg-white'>
								<div className='flex justify-between items-baseline gap-x-4 '>
									<time
										dateTime={'event submit date'}
										className='text-gray-600 text-xs'>
										게시 일자 : {createDate}
									</time>
									<div>
										<button className='inline-flex w-full justify-center rounded-md border-gray-400 border px-3 py-2 text-xs font-semibold text-gray-800 shadow-sm hover:bg-indigo-500 hover:border-indigo-500 hover:text-gray-100 sm:ml-3 sm:w-auto'>
											Edit
										</button>
										<button className='inline-flex w-full justify-center rounded-md border-gray-400 border px-3 py-2 text-xs font-semibold  text-gray-800 shadow-sm hover:bg-indigo-500 hover:border-indigo-500 hover:text-gray-100 sm:ml-3 sm:w-auto'>
											Delete
										</button>
									</div>
								</div>
								<div className='w-full overflow-hidden rounded-lg'>
									<img
										src={`${events.image}`}
										alt={events.title}
										className='h-full w-full object-cover object-center'
									/>
								</div>
								<div
									key={events.id}
									className='flex flex-col items-start justify-between p-2'>
									<div className='group relative'>
										<h2 className='text-3xl font-bold tracking-tight text-gray-800 sm:text-2xl mb-4'>
											{events.title}
										</h2>
										<p className='text-base font-medium leading-6 text-gray-600 sm:text-base'>
											<span className='font-semibold pr-2'>행사 날짜 |</span>
											{eventsDate}
										</p>
										<p className='mt-1 text-base font-medium leading-6 text-gray-600 sm:text-base'>
											<span className='font-semibold pr-2'>행사 장소 |</span>
											{events.location}
										</p>
										<p className='mt-3 text-base font-semibold leading-6 text-gray-600 sm:text-base'>
											행사 소개
										</p>
										<p className='mt-1 text-base leading-6 text-gray-400 sm:text-sm text-justify'>
											{events.description}
										</p>
									</div>
									{/* <div className='relative mt-8 flex items-center gap-x-4'>
										<img
											src={`${events.image}`}
											alt=''
											className='h-10 w-10 rounded-full bg-gray-50'
										/>
										<div className='text-sm leading-6'>
											<p className='font-semibold text-gray-900'>
												<span className='absolute inset-0' />
												user name
											</p>
											<p className='text-gray-600'>user information</p>
										</div>
									</div> */}
								</div>
							</article>
						</div>
					</div>
				</>
			);
		});
	}

	useEffect(() => {
		fetcher();
	}, [fetcher]);

	return (
		<>
			<Header>
				<Link to='/events'>View all Events</Link>
			</Header>
			<article>{content}</article>
		</>
	);
}
