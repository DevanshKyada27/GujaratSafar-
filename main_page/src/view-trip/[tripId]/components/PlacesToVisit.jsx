import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  const itinerary = trip?.tripData?.[0]?.travelPlan?.itinerary;
  const itineraryEntries = itinerary
    ? Object.entries(itinerary).sort((a, b) =>
        parseInt(a[0].replace(/\D/g, '')) - parseInt(b[0].replace(/\D/g, ''))
      )
    : [];

  return (
    <div>
      <h2 className="font-bold text-lg mt-10">Places To Visit</h2>
      <div className="mt-4 flex flex-col gap-6">
        {itineraryEntries.map(([dayKey, dayData], index) => (
          <div
            key={index}
            className="bg-white shadow p-4 rounded-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out"
          >
            <h2 className="font-bold text-lg text-indigo-600 capitalize">
              {dayKey.replace('day', 'Day ')}
            </h2>
            <div className="mt-2 flex flex-col gap-3">
              {/* Map through morning, afternoon, evening */}
              {['morning', 'afternoon', 'evening'].map((timeOfDay, idx) => {
                const place = dayData[timeOfDay];
                if (!place) return null;
                
                return (
                  <div
                    key={timeOfDay}
                    className="transition-all duration-300 ease-in-out hover:scale-[1.02] transform cursor-pointer"
                  >
                    <div className="border-l-4 border-indigo-400 pl-4 my-3">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          place.placeName
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h3 className="font-semibold text-lg mb-2">
                          {timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}: {place.placeName}
                        </h3>
                        <div className="flex gap-4 items-center">
                          <PlaceCardItem place={place} />
                          <div className="flex flex-col gap-2 text-base">
                            <p className="text-gray-600">📝 {place.placeDetails}</p>
                            <p className="text-black">🎟️ Ticket Pricing: {place.ticketPricing}</p>
                            <p className="text-black">⏱️ Time To Spend: {place.timeToSpend}</p>
                            <p className="text-black">🕐 {place.travelTime}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    {idx !== 2 && <hr className="border-t-2 border-gray-300 my-2" />}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;