import { Link } from 'react-router-dom';
import EventsSection from './eventsSection'
import Header from '../Ui/Header';
import EventsIntroSection from './eventsIntroSection';

const Eventspage = () => { 
  
  return (
  <>
    <Header>
      <Link to="/events/new" className="button">
        New Event
      </Link>
    </Header>
    <main>
      <EventsIntroSection/>
      <EventsSection />  
    </main>
  </>
  )
}

export default Eventspage

