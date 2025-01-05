import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import potworkshop from '../assets/potteryworkshop.jpg';
import craft from '../assets/artexhibition.jpg';
import textile from '../assets/textile.jpg';

// Sample event data (replace with dynamic data from an API or database)
const events = [
  {
    title: 'Pottery Workshop',
    description:
      'Join us for a hands-on pottery workshop where you can learn traditional techniques from expert artisans.',
    date: 'March 25, 2024',
    location: 'Delhi, India',
    image: potworkshop,
  },
  {
    title: 'Handicrafts Exhibition',
    description:
      'Explore a wide variety of handcrafted products at our annual exhibition.',
    date: 'April 10, 2024',
    location: 'Mumbai, India',
    image: craft,
  },
  {
    title: 'Textile Art Fair',
    description:
      'Discover the rich heritage of Indian textiles at this vibrant art fair.',
    date: 'May 5, 2024',
    location: 'Jaipur, India',
    image: textile,
  },
];

const EventsPage = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-teal-50 to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-primaryText mb-6">
            Upcoming Events
          </h2>
          <p className="text-lg text-secondaryText">
            Stay updated with the latest events, workshops, and exhibitions in
            the artisan community. Celebrate craftsmanship and connect with
            talented artisans.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="event-card bg-white rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-shadow"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold text-primaryText">
                {event.title}
              </h3>
              <p className="mt-2 text-md text-secondaryText">
                {event.description}
              </p>
              <div className="flex items-center gap-2 mt-4 text-primaryText">
                <FaCalendarAlt />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-primaryText">
                <FaMapMarkerAlt />
                <span>{event.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-12">
          <button className="bg-primaryAccent text-black py-2 px-6 rounded shadow-md hover:bg-primaryText transition">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
