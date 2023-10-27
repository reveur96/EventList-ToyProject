/** @format */

import {useSubmit } from 'react-router-dom';

import EventForm from '../components/Events/EventForm';

export default function CreateEventPage() {
	const submit = useSubmit();

	function handleSubmit({ formData }: any) {
		submit(formData, { method: 'PUT' });
	}

	return <EventForm onSubmit={handleSubmit} />;
}
