import React from 'react'
import { Link } from 'react-router-dom';

function Hotels({trip}) {

    const hotels = trip?.tripData?.[0]?.travelPlan?.hotelOptions || [];   //very important line

    // console.log("Resolved hotels array:", hotels);

  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>Hotel Recommendation</h2>

        {/* <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
            {hotels.map((hotel, index)=>(
                <div key={index} className='hover:scale-105 transition-all cursor-pointer'>
                    <img src="/FeedbackForm_bg.jpg" className="rounded-xl w-full max-w-md" />
                    <div className='my-2 flex flex-col gap-2'>
                      <h2 className='font-medium'>{hotel?.hotelName}</h2>
                      <h2 className='text-xs text-gray-500'>📍 {hotel?.hotelAddress}</h2>
                      <h2 className='text-sm'>💵 {hotel?.price}</h2>
                      <h2 className='text-sm'>⭐ {hotel?.rating}</h2>
                    </div>
                </div>
            ))}
        </div> */}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-4'>
        {hotels.map((hotel, index) => (
          <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel.hotelName+"," + hotel?.hotelAddress} target='_blank'>
          <div 
            key={index} 
            className='bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all cursor-pointer'
          >
            <img 
              src="/FeedbackForm_bg.jpg" 
              alt={hotel?.hotelName} 
              className="w-full h-48 object-cover"
            />
            <div className='p-4 flex flex-col gap-2'>
              <h2 className='text-lg font-semibold text-gray-800'>{hotel?.hotelName}</h2>
              <p className='text-sm text-gray-500 flex items-center gap-1'>
                📍 <span>{hotel?.hotelAddress}</span>
              </p>
              <p className='text-sm text-gray-600'>💵 <span className='font-medium'>{hotel?.price}</span></p>
              <p className='text-sm text-yellow-500'>⭐ <span className='font-medium'>{hotel?.rating}</span></p>
              <p className='text-sm text-gray-600 mt-2'>📝 <span className='font-medium'>{hotel?.description}</span></p>
            </div>
          </div>
          </Link>
        ))}
      </div>


    </div>
  )
}

export default Hotels



// import React from 'react';

// function Hotels({ trip }) {
//     const hotelArray = trip?.tripData?.[0]?.travelPlan?.hotelOptions || [];

//     console.log("Full trip object:", trip);
//     console.log("Hotel Options:", hotelArray);

//     return (
//         <div className="p-4">
//             <h2 className="font-bold text-xl mt-5 mb-4">Hotel Recommendations</h2>

//             {hotelArray.length === 0 ? (
//                 <p className="text-gray-500">No hotel data found.</p>
//             ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {hotelArray.map((item, index) => (
//                         <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
//                             <img 
//                                 src="/FeedbackForm_bg.jpg" 
//                                 alt={item.hotelName} 
//                                 className="w-full h-48 object-cover"
//                             />
//                             <div className="p-4">
//                                 <h3 className="text-lg font-semibold">{item.hotelName}</h3>
//                                 <p className="text-gray-600 text-sm mb-2">{item.hotelAddress}</p>
//                                 <p className="text-sm">{item.description}</p>
//                                 <p className="mt-2 text-sm font-medium">Price: {item.price}</p>
//                                 <p className="text-sm">Rating: {item.rating} ⭐</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Hotels;
