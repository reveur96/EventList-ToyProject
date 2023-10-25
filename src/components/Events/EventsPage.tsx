import { Link } from 'react-router-dom';
import EventsSection from './eventsSection'
import Header from '../Header';
import EventsIntroSection from './eventsIntroSection';
import FindEventSection from './findEventSection';

const Eventspage = () => { 
  
  return (
  <>
    <Header>
      <Link to="/events/new" className="button">
        New Event
      </Link>
    </Header>
    <main>
      <EventsIntroSection />
      <FindEventSection/>
      <EventsSection />  
    </main>
  </>
  )
}

export default Eventspage

