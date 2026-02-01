import { useState } from 'react';
import './Announcements.css';

function Announcements() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All News' },
    { id: 'football', label: 'American Football' },
    { id: 'flag', label: 'Flag Football' },
    { id: 'esports', label: 'E-sports' },
    { id: 'general', label: 'General' },
  ];

  const announcements = [
    {
      id: 1,
      title: 'Season Opener: Eagles vs. City Hawks',
      category: 'football',
      date: 'January 28, 2025',
      featured: true,
      excerpt: 'Get ready for an exciting season opener as the Eagles take on the City Hawks at our home stadium. This highly anticipated match marks the beginning of what promises to be our most competitive season yet.',
      image: 'Game Day Banner',
    },
    {
      id: 2,
      title: 'E-sports Team Qualifies for Regional Finals',
      category: 'esports',
      date: 'January 25, 2025',
      featured: false,
      excerpt: 'Our League of Legends team has secured their spot in the regional finals after an impressive winning streak. Join us in celebrating this achievement!',
      image: 'E-sports Team Photo',
    },
    {
      id: 3,
      title: 'Flag Football Spring Registration Now Open',
      category: 'flag',
      date: 'January 22, 2025',
      featured: false,
      excerpt: 'Registration for our spring Flag Football leagues is now open! We have leagues for all ages and skill levels. Early bird pricing available until February 15th.',
      image: 'Flag Football Action',
    },
    {
      id: 4,
      title: 'New Training Facility Grand Opening',
      category: 'general',
      date: 'January 18, 2025',
      featured: true,
      excerpt: 'We are thrilled to announce the grand opening of our new state-of-the-art training facility. The facility features modern equipment, indoor practice areas, and dedicated spaces for all our programs.',
      image: 'Facility Photo',
    },
    {
      id: 5,
      title: 'Youth Football Camp Registration',
      category: 'football',
      date: 'January 15, 2025',
      featured: false,
      excerpt: 'Summer youth football camp dates have been announced! Register early to secure your spot in our popular development program for ages 8-16.',
      image: 'Youth Camp Photo',
    },
  ];

  const upcomingEvents = [
    { date: 'Feb 10, 2025', title: 'Eagles vs. City Hawks', location: 'Home Stadium' },
    { date: 'Feb 15, 2025', title: 'Flag Football Tryouts', location: 'Practice Field' },
    { date: 'Feb 20, 2025', title: 'E-sports Tournament', location: 'Gaming Center' },
    { date: 'Mar 1, 2025', title: 'Sponsor Appreciation Night', location: 'Main Hall' },
  ];

  const filteredAnnouncements = activeFilter === 'all'
    ? announcements
    : announcements.filter(a => a.category === activeFilter);

  const getCategoryLabel = (category) => {
    const labels = {
      football: 'American Football',
      flag: 'Flag Football',
      esports: 'E-sports',
      general: 'General',
    };
    return labels[category] || category;
  };

  return (
    <div className="announcements-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Seletiva Brasília Wizards</h1>
          <p>
            Venha fazer parte do nosso time
          </p>
        </div>
      </div>

      {/* Filter Section 
      <section className="announcements-filter">
        <div className="container">
          <div className="filter-container">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Main Content */}
      <section className="announcements-content">
        <div className="container">
          <div className='announcements-main'>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Announcements;
