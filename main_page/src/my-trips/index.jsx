import { db } from '@/service/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserTripCardItem from './components/UserTripCardItem';
import { MdTravelExplore } from "react-icons/md";

function MyTrips() {
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetUserTrips();
  }, []);

  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      navigate('/');
      return;
    }

    const q = query(collection(db, 'AITrips'), where('userEmail', '==', user.email));
    const querySnapshot = await getDocs(q);

    const trips = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      trips.push(doc.data());
    });

    setUserTrips(trips);
    setLoading(false);
  };

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>My Trip History</h2>

      <div className='grid grid-cols-2 mt-10 md:grid-cols-3 gap-5'>
        {loading ? (
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className='h-[220px] w-full bg-slate-200 animate-pulse rounded-xl'
            />
          ))
        ) : userTrips.length > 0 ? (
          userTrips.map((trip, index) => (
            <UserTripCardItem trip={trip} key={index} />
          ))
        ) : (
          <div className='col-span-2 md:col-span-3 flex flex-col items-center justify-center text-center w-full mt-20 text-gray-600'>
            <MdTravelExplore className='text-6xl mb-4 text-gray-400' />
            <h3 className='text-xl font-semibold'>No previous trips found</h3>
            <p className='text-sm mt-1'>Start your journey by creating your first trip!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyTrips;
