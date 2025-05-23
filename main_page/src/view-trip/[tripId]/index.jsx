import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'sonner';
import InfoSection from './components/InfoSection';
import Hotels from './components/Hotels';
import PlacesToVisit from './components/PlacesToVisit';
import Footer from './components/Footer';

function Viewtrip() {

  const {tripId} = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(()=>{
    tripId&&GetTripData();
  }, [tripId])


  //Used to get the information from the firebase
  const GetTripData = async() => {
    const docRef = doc(db, 'AITrips', tripId);
    const docSnap = await getDoc(docRef);


    if(docSnap.exists()) {
      console.log("Document: ", docSnap.data());
      setTrip(docSnap.data());
    } else {
      console.log("No such document");
      toast('Sorry! No Trip Found!!')
    }
  }

  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
      {/*Information Section*/}
      <InfoSection trip={trip} />

      {/*Recommended Hotels*/}
      <Hotels trip={trip} />

      {/*Plans*/}
      <PlacesToVisit trip={trip} />

      {/*Footer*/}
      <Footer />
    </div>
  )
}

export default Viewtrip