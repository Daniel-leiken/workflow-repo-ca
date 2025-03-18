import { getVenues } from "../../api/venues/getVenues.js";

export async function displayVenueList() {
  const venueContainer = document.getElementById('venue-container');
  venueContainer.innerHTML = 'Loading...';

  try {
    const venues = await getVenues();
    console.log('Fetched venues:', venues);  // Log the fetched venues
    venueContainer.innerHTML = '';

    venues.forEach(venue => {
      const venueItem = document.createElement('div');
      venueItem.className = 'venue-item';
      venueItem.innerHTML = `
        <h2>${venue.name}</h2>
        <p>${venue.description}</p>
        <a href="/venue/${venue.id}" class="venue-link">View Details</a>
      `;
      venueContainer.appendChild(venueItem);
    });

    console.log('Venue items added to the DOM:', venueContainer.innerHTML);  // Log when venue items are added to the DOM
  } catch (error) {
    venueContainer.innerHTML = 'Failed to load venues';
    console.error('Error fetching venues:', error);  // Log any errors
  }
}
