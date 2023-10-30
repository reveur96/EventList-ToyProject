/** @format */

import { useQuery } from '@tanstack/react-query';

import EventItem from './EventItem';
import { fetchEventList } from '../../util/http';

const EventsSection = () => {
		const { data }: any = useQuery({
			queryKey: ['events'],
			queryFn: () => fetchEventList(),
			staleTime: 10000,
		});

	return (
		<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8'>
			<h2 className='text-2xl font-bold tracking-tight text-white mb-4'>
				Event List
			</h2>

			<ul className='mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
				{data?.map((event: any) => (
					<li
						className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-white  xl:aspect-h-8 xl:aspect-w-7 p-3'
						key={event.id}>
						<EventItem event={event} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default EventsSection;
