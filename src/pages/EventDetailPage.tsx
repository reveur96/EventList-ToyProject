/** @format */

import { useState } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Dialog } from '@headlessui/react';

import Header from '../components/Header';
import { Modal } from '../components/Ui/Modal';
import { fetchSelectedEvent, deleteEvent, queryClient } from '../util/http';

interface eventDataType {
	created_at: string | undefined;
	description: string | undefined;
	end_date: string | undefined;
	id: number | undefined;
	image: string | undefined;
	location: string | undefined;
	start_date: string | undefined;
	title: string | undefined;
	user_info: string | null;
}

export default function EventDetails() {
	const params = useParams();

	const { data } = useQuery({
		queryKey: ['events', params.id],
		queryFn: () => fetchSelectedEvent(params.id as string),
		staleTime: 10000,
	});

	let eventData: eventDataType | undefined;

	if (data) {
		eventData = data[0] as eventDataType;
	}

	const formattedDate = (dateData: string) => {
		return new Date(dateData).toLocaleDateString('ko', {
			day: 'numeric',
			month: 'short',
			year: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
		});
	};

	const createDate = eventData?.created_at
		? formattedDate(eventData.created_at)
		: '';
	const eventStartDate = eventData?.start_date
		? formattedDate(eventData.start_date)
		: '';
	const eventEndDate = eventData?.end_date
		? formattedDate(eventData.end_date)
		: '';

	const [isDeleting, setIsDeleting] = useState(false);
	const navigate = useNavigate();

	const { mutate } = useMutation({
		mutationFn: deleteEvent,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['events'],
				refetchType: 'none',
			});
			navigate('/events');
		},
	});

	const handleStartDelete = () => {
		setIsDeleting(true);
	};

	const handleStopDelete = () => {
		setIsDeleting(false);
	};

	const handleDelete = () => {
		mutate(eventData?.id as number);
	};

	return (
		<>
			{isDeleting && (
				<Modal
					clickAction={handleDelete}
					cancelAction={handleStopDelete}>
					<Dialog.Title
						as='h3'
						className='text-base font-semibold leading-6 text-gray-900'>
						Delete event
					</Dialog.Title>
					<Dialog.Description className='mt-2'>
						<p className='text-sm text-gray-500'>
							Do you really want to delete this event? This action cannot be
							undone.
						</p>
					</Dialog.Description>
				</Modal>
			)}
			<Outlet />
			<Header />
			<article className='py-14 sm:py-16'>
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>
					<article className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-3 pt-5 pb-8 px-5 rounded-lg border border-gray-400 bg-white'>
						<div className=' flex justify-between pb-4 border-b border-gray-400'>
							<Link
								to='/events'
								className=' w-full  rounded-md border-gray-500 border px-3 py-2 text-sm font-semibold  text-gray-800 shadow-sm hover:bg-gray-800 hover:border-indigo-500 hover:text-gray-100 sm:w-auto'>
								View all events
							</Link>
							<div className='flex justify-between'>
								<Link
									to={`/events/${eventData?.id}/edit`}
									className=' w-full  rounded-md border-gray-500 border px-4 py-2 text-xs font-semibold text-gray-800 shadow-sm hover:bg-indigo-500 hover:border-indigo-500 hover:text-gray-100 mr-2 lg:mr-0'>
									Edit
								</Link>
								<button
									className='w-full rounded-md border-gray-500 border px-3 py-2 text-xs font-semibold text-gray-800 shadow-sm hover:bg-indigo-500 hover:border-indigo-500 hover:text-gray-100 sm:ml-3 sm:w-auto'
									onClick={handleStartDelete}>
									Delete
								</button>
							</div>
						</div>
						<div className='flex justify-between items-baseline'>
							<div className='relative  flex items-center gap-x-4'>
								<img
									src={`${eventData?.image}`}
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
							</div>
							<p className='text-gray-600 text-xs'>게시 일자 : {createDate}</p>
						</div>
						<div className='w-full overflow-hidden rounded-lg'>
							<img
								src={`${eventData?.image}`}
								alt={eventData?.title}
								className='h-full w-full object-cover object-center'
							/>
						</div>
						<div
							key={eventData?.id}
							className='flex flex-col items-start justify-between p-2'>
							<h2 className='text-3xl font-bold tracking-tight text-gray-800 sm:text-2xl mb-4'>
								{eventData?.title}
							</h2>
							<p className='text-base font-medium leading-6 text-gray-600 sm:text-base'>
								<span className='font-semibold pr-2'>행사 날짜 |</span>
								{eventStartDate} ~ {eventEndDate}
							</p>
							<p className='mt-1 text-base font-medium leading-6 text-gray-600 sm:text-base'>
								<span className='font-semibold pr-2'>행사 장소 |</span>
								{eventData?.location}
							</p>
							<p className='mt-3 text-base font-semibold leading-6 text-gray-600 sm:text-base'>
								행사 소개
							</p>
							<p className='w-full break-words  mt-1 text-base leading-6 text-gray-400 sm:text-sm text-justify '>
								{eventData?.description}
							</p>
						</div>
					</article>
				</div>
			</article>
		</>
	);
}
