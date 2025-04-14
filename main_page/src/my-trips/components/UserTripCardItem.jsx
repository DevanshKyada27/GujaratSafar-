import React from 'react'
import { Link } from 'react-router-dom'

function UserTripCardItem({trip}) {
  return (
    <Link to={'/view-trip/' + trip?.id}>
        <div className='hover:scale-105 transition-all'>
            <img src="/FeedbackForm_bg.jpg" className='object-cover rounded-xl h-[220px]' />
            <div>
                <h2 className='font-bold text-lg text-black'>{trip?.userSelection?.destination}</h2>
                <h2 className='text-medium text-gray-500'>{trip?.userSelection.noOfDays} Days trip with {trip?.userSelection?.budget} Budget for {trip?.userSelection?.traveler}</h2>
            </div>
        </div>
    </Link>
  )
}

export default UserTripCardItem