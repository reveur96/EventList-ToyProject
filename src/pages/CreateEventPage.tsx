/** @format */

import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import EventForm from '../components/Events/EventForm';
import { createEvent } from '../util/http';

export default function CreateEventPage() {
	const navigate = useNavigate();

	const { mutate } = useMutation({
		mutationFn: createEvent,
		onSuccess: () => {
			navigate(`/events`);
		},
		onError: (error: Error) => {
			throw error;
		},
	});

	function handleSubmit(FormData: any) {
		console.log(FormData);
		mutate(FormData);
	}

	return <EventForm onSubmit={handleSubmit} />;
}
