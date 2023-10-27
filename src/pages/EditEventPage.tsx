/** @format */

import { useParams, useSubmit } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { fetchSelectedEvent } from '../util/http';
import EventForm from '../components/Events/EventForm';

export default function EditEventPage() {
	const submit = useSubmit();
	const params = useParams();

	const { data } = useQuery({
		queryKey: ['events', params.id],
		queryFn: () => fetchSelectedEvent(params.id as string),
		staleTime: 10000,
	});

	function handleSubmit({ formData }: any) {
		submit(formData, { method: 'PUT' });
	}

	return (
		<EventForm
			inputData={data}
			onSubmit={handleSubmit}
		/>
	);
}
