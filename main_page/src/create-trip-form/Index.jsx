import { chatSession } from '@/service/AIModel';
import React, { useEffect, useState } from 'react';
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '@/service/firebaseConfig';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

// Updated AI prompt to match Firebase variable structure
export const AI_PROMPT = `Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget.

The response must be in this specific JSON format with exact variable names:
{
  "tripData": [
    {
      "travelPlan": {
        "location": "{location}",
        "duration": "{totalDays} Day(s)",
        "budget": "{budget}",
        "groupSize": "{traveler}",
        "hotelOptions": [
          {
            "hotelName": "string",
            "hotelAddress": "string",
            "price": "string",
            "hotelImageUrl": "string",
            "geoCoordinates": {
              "latitude": number,
              "longitude": number
            },
            "rating": number,
            "description": "string"
          }
        ],
        "itinerary": {
          "day1": {
            "morning": {
              "placeName": "string",
              "placeDetails": "string",
              "placeImageUrl": "string",
              "geoCoordinates": {
                "latitude": number,
                "longitude": number
              },
              "ticketPricing": "string",
              "timeToSpend": "string",
              "travelTime": "string"
            },
            "afternoon": {
              "placeName": "string",
              "placeDetails": "string",
              "placeImageUrl": "string", 
              "geoCoordinates": {
                "latitude": number,
                "longitude": number
              },
              "ticketPricing": "string",
              "timeToSpend": "string",
              "travelTime": "string"
            },
            "evening": {
              "placeName": "string",
              "placeDetails": "string",
              "placeImageUrl": "string",
              "geoCoordinates": {
                "latitude": number,
                "longitude": number
              },
              "ticketPricing": "string",
              "timeToSpend": "string",
              "travelTime": "string"
            },
            "bestTimeToVisit": "string"
          }
        }
      }
    }
  ]
}

Include 2-3 hotel options with all required fields. For each place in the itinerary, include 'timeToSpend' (e.g., '2-3 hours') and 'travelTime' (e.g., 'From Hotel: 15 minutes'). For multiple days, follow the same structure with day2, day3, etc.`;


function FullPageLoader() {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-orange-500"></div>
        <span className="absolute text-[10px] font-bold text-orange-600">GujaratSafar</span>
      </div>
      <p className="text-xl font-semibold mt-5 text-orange-500">Loading, please be patient...</p>
    </div>
  );
}

function Index() {
  const [formData, setFormData] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);


  //loader animation
  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Google authentication functions
  const login = useGoogleLogin({
    flow: 'implicit',
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error)
  });

  const OnGenerateTrip = async() => {
    const user = localStorage.getItem('user');

    if(!user) {
      setOpenDialog(true);
      return;
    }

    if (!formData?.destination || !formData?.noOfDays || !formData?.budget || !formData?.traveler) {
      toast("Please fill all the details!");
      return;
    }

    //days condition
    if (parseInt(formData?.noOfDays) > 7) {
      toast("Please enter the days less than or equal to 7!");
      return;
    }

    setLoading(true);
    
    // Format budget to match Firebase (first letter capitalized)
    const formattedBudget = formData.budget.charAt(0).toUpperCase() + formData.budget.slice(1);
    
    const FINAL_PROMPT = AI_PROMPT
      .replace(/{location}/g, formData?.destination)
      .replace(/{totalDays}/g, formData?.noOfDays)
      .replace(/{traveler}/g, formData?.traveler)
      .replace(/{budget}/g, formattedBudget);

    console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);  //passing the prompt to the AI model
    
    console.log(result?.response?.text());

    setLoading(false);
    SaveAiTrip(result?.response?.text());
  };

  // Save data to firebase
  const SaveAiTrip = async(TripData) => {
    setLoading(true);

    const user = JSON.parse(localStorage.getItem('user'));
    const docId = Date.now().toString();

    // Parse the JSON response from AI
    const parsedData = JSON.parse(TripData);
    
    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: parsedData.tripData, // Use the correct structure from AI response
      userEmail: user?.email,
      id: docId
    });

    setLoading(false);
    navigate('/view-trip/' + docId);
  };

  // User info from google authentication
  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDialog(false);
      OnGenerateTrip();
    });
  };

  //loading condition
  if (pageLoading) return <FullPageLoader />;

  return (
    <>
      <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5">
        <h2 className="text-[3rem] text-[#ff7043] font-extrabold mb-5 uppercase text-center">
          Tell us your travel preferences 🏕️🌴
        </h2>
        <p className="text-[#666] text-[1.2rem] mt-2 mb-10 max-w-[800px] leading-relaxed text-center mx-auto">
          Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
        </p>
      </div>

      {/* Destination Dropdown */}
      <div className="destination-select text-center my-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          What is your choice of destination?
        </h3>
        <div className="w-full mx-auto bg-gray-100 rounded-lg">
          <select
            id="destination"
            value={formData.destination || ''}
            onChange={(e) => handleInputChange('destination', e.target.value)}
            className="w-full p-3 mt-1 border-2 border-gray-300 rounded-lg text-base bg-white"
          >
            <option value="">Select a destination</option>
            <option value="Kutch">Kutch</option>
            <option value="Banaskantha">Banaskantha</option>
            <option value="Surendranagar">Surendranagar</option>
            <option value="Rajkot">Rajkot</option>
            <option value="Amreli">Amreli</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Bhavnagar">Bhavnagar</option>
            <option value="Jamnagar">Jamnagar</option>
            <option value="Patan">Patan</option>
            <option value="Morbi">Morbi</option>
            <option value="Junagadh">Junagadh</option>
            <option value="Bharuch">Bharuch</option>
            <option value="Mehsana">Mehsana</option>
            <option value="Sabarkantha">Sabarkantha</option>
            <option value="Vadodara">Vadodara</option>
            <option value="Surat">Surat</option>
            <option value="Devbhoomi Dwarka">Devbhoomi Dwarka</option>
            <option value="Dahod">Dahod</option>
            <option value="Chhota Udepur">Chhota Udepur</option>
            <option value="Panchmahal">Panchmahal</option>
            <option value="Kheda">Kheda</option>
            <option value="Tapi">Tapi</option>
            <option value="Gir Somnath">Gir Somnath</option>
            <option value="Anand">Anand</option>
            <option value="Aravalli">Aravalli</option>
            <option value="Narmada">Narmada</option>
            <option value="Valsad">Valsad</option>
            <option value="Botad">Botad</option>
            <option value="Mahisagar">Mahisagar</option>
            <option value="Porbandar">Porbandar</option>
            <option value="Gandhinagar">Gandhinagar</option>
            <option value="Dang">Dang</option>
            <option value="Navsari">Navsari</option>
          </select>
        </div>

        {formData.destination && (
          <p className="mt-4 text-lg text-green-600 font-medium">
            Selected Destination: {formData.destination}
          </p>
        )}
      </div>

      {/* Days Input */}
      <div className="select-days text-center my-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          How many days are you planning your trip?
        </h3>
        <div className="w-full mx-auto bg-gray-100 rounded-lg">
          <input
            type="text"
            id="day"
            placeholder="Ex., 3"
            className="w-full p-3 mt-1 border-2 border-gray-300 rounded-lg text-base"
            onChange={(e) => handleInputChange('noOfDays', e.target.value)}
          />
        </div>
      </div>

      {/* Budget Selection */}
      <div className="budget my-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          What is your budget?
        </h3>
        <div className="flex justify-center gap-8 mt-5 flex-wrap">
          {['cheap', 'moderate', 'luxury'].map((type) => (
            <div
              key={type}
              className={`p-6 w-[300px] text-center rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-1 
                ${formData?.budget === type
                  ? 'bg-orange-500 text-white border-3'
                  : 'bg-white text-black hover:bg-orange-500 hover:text-white'}`}
              onClick={() => handleInputChange('budget', type)}
            >
              <h2 className="text-2xl">
                {type === 'cheap' ? '💵' : type === 'moderate' ? '💰' : '💸'}
              </h2>
              <h2 className="text-xl font-semibold capitalize">{type}</h2>
              <p>
                {type === 'cheap'
                  ? 'Stay conscious of costs'
                  : type === 'moderate'
                  ? 'Keep cost on the average side'
                  : "Don't worry about the cost"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Group Selection */}
      <div className="plan-to-travel my-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Who do you plan on traveling with on your next adventure?
        </h3>
        <div className="flex justify-around flex-wrap gap-8">
          {[
            { id: 'me', icon: '✈️', title: 'Just Me', desc: 'A sole travels in exploration', people: '1 people' },
            { id: 'couple', icon: '🥂', title: 'A Couple', desc: 'Two travelers in tandem', people: '2 people' },
            { id: 'family', icon: '🏡', title: 'Family', desc: 'A group of fun loving adventure', people: '3 to 5 people' },
            { id: 'friends', icon: '⛵', title: 'Friends', desc: 'A bunch of thrill-seekers', people: '5 to 10 people' },
          ].map((opt) => (
            <div
              key={opt.id}
              className={`p-6 w-[300px] text-center rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-1 
                ${formData?.traveler === opt.people
                  ? 'bg-green-500 text-white border-3'
                  : 'bg-white text-black hover:bg-green-500 hover:text-white'}`}
              onClick={() => handleInputChange('traveler', opt.people)}
            >
              <h2 className="text-2xl">{opt.icon}</h2>
              <h2 className="text-xl font-semibold">{opt.title}</h2>
              <p>{opt.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-end px-5 sm:px-10 pb-5">
        <button 
          disabled={loading}
          className="bg-[#ff7043] text-white py-3 px-8 rounded-full font-bold hover:bg-[#f4511e] transition-colors duration-300 shadow-md"
          onClick={OnGenerateTrip}
        >
          {loading ? 
            <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin'/> : 
            'Generate Trip'
          }
        </button>
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <h1 className='text-black font-bold'>GujaratSafar</h1>
              <h2 className='font-bold text-lg mt-7'>Sign In with Google</h2>
              <p>Sign in to the App with Google authentication, It's safe and secure!!</p>

              <button 
                onClick={login} 
                className='w-full mt-5 flex gap-4 items-center justify-center bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300'
              >
                <FcGoogle className='h-7 w-7' /> 
                Sign In with Google
              </button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Index;