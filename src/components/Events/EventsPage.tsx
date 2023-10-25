/** @format */

import { Link } from 'react-router-dom';
import EventsSection from './EventsSection';
import Header from '../Header';
import EventsIntroSection from './EventsIntroSection';
import FindEventSection from '../../components/Events/FindEventSection';

const Eventspage = () => {
	return (
		<>
			<Header>
				<Link
					to='/events/new'
					className='button'>
					New Event
				</Link>
			</Header>
			<main>
				<EventsIntroSection />
				<FindEventSection />
				<EventsSection />
			</main>
		</>
	);
};

export default Eventspage;
