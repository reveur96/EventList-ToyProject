/** @format */

import EventsSection from '../components/Events/EventsSection';
import Header from '../components/Header';
import FindEventSection from '../components/Events/FindEventSection';

const EventsPage = () => {
	return (
		<>
			<Header />
			<main>
				<FindEventSection />
				<EventsSection />
			</main>
		</>
	);
};

export default EventsPage;
