/** @format */
import { QueryClient } from '@tanstack/react-query';

import supabase from '../lib/supabase-client';

export const queryClient = new QueryClient();

export async function fetchEventList() {
	const { data: events, error: getError } = await supabase
		.from('events')
		.select();

	if (getError || events === undefined) {
		throw getError;
	}
	return events;
}

export async function fetchSelectedEvent(id: string) {
	const { data: events, error: getError } = await supabase
		.from('events')
		.select()
		.eq('id', `${id}`);

	if (getError) {
		throw getError;
	}

	return events;
}

export async function deleteEvent(id: number) {
	const { data: successMessage, error: getError } = await supabase
		.from('events')
		.delete()
		.eq('id', id);

	if (getError) {
		throw getError;
	}

	return successMessage;
}

export async function updateEvent(formData: any) {
	const { error: error, status: status } = await supabase
		.from('events')
		.update(formData)
		.eq('id', formData.id);

	if (error) {
		throw new Error(error.message);
	}

	if (status === 204) {
		return formData;
	}
}

export async function createEvent(formData: any) {
	const { error: error, status: status } = await supabase
		.from('events')
		.upsert([formData]);

	if (error) {
		throw new Error(error.message);
	}

	if (status === 204) {
		return formData;
	}
}