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
