/** @format */

import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';

import { fetchSelectedEvent, updateEvent } from '../util/http';
import EventForm from '../components/Events/EventForm';

export default function EditEventPage() {
	const params = useParams();
	const navigate = useNavigate();

	const { data } = useQuery({
		queryKey: ['events', params.id],
		queryFn: () => fetchSelectedEvent(params.id as string),
		staleTime: 10000,
	});

	const { mutate } = useMutation({
		mutationFn: updateEvent,
		onSuccess: (data: any) => {
			navigate(`/events/${data.id}`);
		},
		onError: (error: Error) => {
			throw error;
		},
	});

	function handleSubmit(FormData: any) {
		mutate(FormData);
	}

	return (
		<EventForm
			inputData={data}
			onSubmit={handleSubmit}
		/>
	);
}
