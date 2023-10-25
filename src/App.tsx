/** @format */

import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';

import EventsPage from '../src/components/Events/EventsPage';
import EventDetailPage from './components/Events/EventDetailPage';

export const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to='/events' />,
	},
	{
		path: '/events',
		element: <EventsPage />,
	},
	{
		path: '/events/:id',
		element: <EventDetailPage />,
	},
]);

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
