/** @format */

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import CreateEventPage from './pages/CreateEventPage';
import EditEvent from './pages/EditEventPage';
import EventDetailPage from './pages/EventDetailPage';
import EventsPage from './pages/EventsPage';
import MainPage from './pages/MainPage';

import { queryClient } from './util/http';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/events',
		element: <EventsPage />,
	},
	{
		path: '/newEvent',
		element: <CreateEventPage />,
	},
	{
		path: '/events/:id',
		element: <EventDetailPage />,
		children: [],
	},
	{
		path: '/events/:id/edit',
		element: <EditEvent />,
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
