/** @format */

import EventsSection from '../components/Events/EventsSection';
import Header from '../components/Header';
import EventsIntroSection from '../components/Events/EventsIntroSection';
import FindEventSection from '../components/Events/FindEventSection';

const Mainpage = () => {
	return (
		<>
			<Header />
			<main>
				<EventsIntroSection />
				<FindEventSection />
				<EventsSection />
			</main>
		</>
	);
};

export default Mainpage;
