import { Link } from 'react-router-dom';

const EventItem = ({event}:any) => {
    const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    });
 
  return (
  <Link to={`/events/${event.id}`} className="group">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
      <img src={`${event.image}`} alt={event.title}
     className="h-full w-full object-cover object-center group-hover:opacity-75"/>
    </div>
    <div className="px-2 pb-4">
        <div>
          <h2 className="mt-2 mb-1 text-xl font-bold text-gray-900">{event.title}</h2>
          <p className="mb-2 text-sm text-gray-700">{formattedDate}</p>
          <p className="text-sm text-gray-700">{event.location}</p>
        </div>
      </div>
      </Link>
  )
}


export default EventItem