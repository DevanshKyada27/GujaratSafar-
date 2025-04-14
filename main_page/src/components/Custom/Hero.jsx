// import React, { use, useEffect } from 'react';
// import { useState } from 'react';
// import { toast } from "sonner";

// function Hero() {
//   const [destination, setDestination] = useState('');
//   const [selectedBudget, setSelectedBudget] = useState('');
//   const [selectedTravel, setSelectedTravel] = useState('');

//   const selectBudgetOption = (type) => {  //budget
//     console.log('Selected budget:', type);
//     setSelectedBudget(type);
//   };

//   const selectTravelOption = (id) => {  //travel options
//     console.log('Selected travel option:', id);
//     setSelectedTravel(id);
//   };

//   const handleChange = (e) => {
//     const selectedValue = e.target.value;
//     handleInputChange('destination', selectedValue);
//     // console.log('Selected Destination:', selectedValue);
//   };

//   const [formData, setFormData] = useState([]);
//   const handleInputChange=(name, value)=>{
//     setFormData({
//       ...formData,
//       [name]:value
//     })
//   };

//   useEffect(()=>{
//     console.log(formData);
//   }, [formData])

//   const OnGenerateTrip = () => {
//     if(formData?.noOfDays > 7 && !formData?.destination || !formData?.budget || !formData?.traveler) {
//       toast("Please fill all the details!")
//       return;
//     }

//     console.log(formData);
//   }

//   return (
//     <>
//       <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 ">
//         <h2 className="text-[3rem] text-[#ff7043] font-extrabold mb-5 uppercase text-center">
//           Tell us your travel preferences 🏕️🌴
//         </h2>
//         <p className="text-[#666] text-[1.2rem] mt-2 mb-10 max-w-[800px] leading-relaxed text-center mx-auto">
//           Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
//         </p>
//       </div>

//       {/* Destination Dropdown */}
//       <div className="destination-select text-center my-10">
//         <h3 className="text-xl font-semibold text-gray-800 mb-4">
//           What is your choice of destination?
//         </h3>
//         <div className="w-full mx-auto bg-gray-100 rounded-lg">
//           <select
//             id="destination"
//             value={destination}
//             onChange={handleChange}
//             className="w-full p-3 mt-1 border-2 border-gray-300 rounded-lg text-base bg-white"
//           >
//             <option value="">Select a destination</option>
//             <option value="Ahemdabad">Ahemdabad</option>
//             <option value="Vadodara">Vadodara</option>
//             <option value="Surat">Surat</option>
//             <option value="Devbhoomi Dwarka">Devbhoomi Dwarka</option>
//             <option value="Valsad">Valsad</option>
//           </select>
//         </div>

//         {destination && (
//           <p className="mt-4 text-lg text-green-600 font-medium">
//             Selected Destination: {destination}
//           </p>
//         )}
//       </div>

//       {/* Days Input */}
//       <div className="select-days text-center my-10">
//         <h3 className="text-xl font-semibold text-gray-800 mb-4">
//           How many days are you planning your trip?
//         </h3>
//         <div className="w-full mx-auto bg-gray-100 rounded-lg">
//           <input
//             type="text"
//             id="day"
//             placeholder="Ex., 3"
//             className="w-full p-3 mt-1 border-2 border-gray-300 rounded-lg text-base"
//             onChange={(e)=>handleInputChange('noOfDays', e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Budget Selection */}
//       <div className="budget my-10">
//         <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
//           What is your budget?
//         </h3>
//         <div className="flex justify-center gap-8 mt-5 flex-wrap">
//           {['cheap', 'moderate', 'luxury'].map((type) => (
//             <div
//               key={type}
//               className={`p-6 w-[300px] text-center rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-1 
//                 ${formData?.budget == type 
//                   ? 'bg-orange-500 text-white border-3 border-black' 
//                   : 'bg-white text-black hover:bg-orange-500 hover:text-white'}`}
//               onClick={() => handleInputChange('budget',type)}              
//             >
//               <h2 className="text-2xl">
//                 {type === 'cheap' ? '💵' : type === 'moderate' ? '💰' : '💸'}
//               </h2>
//               <h2 className="text-xl font-semibold capitalize">{type}</h2>
//               <p>
//                 {type === 'cheap'
//                   ? 'Stay conscious of costs'
//                   : type === 'moderate'
//                   ? 'Keep cost on the average side'
//                   : "Don't worry about the cost"}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Travel Group Selection */}
//       <div className="plan-to-travel my-10">
//         <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
//           Who do you plan on traveling with on your next adventure?
//         </h3>
//         <div className="flex justify-around flex-wrap gap-8">
//           {[
//             { id: 'me', icon: '✈️', title: 'Just Me', desc: 'A sole travels in exploration', people: '1 people' },
//             { id: 'couple', icon: '🥂', title: 'A Couple', desc: 'Two travelers in tandem', people: '2 people' },
//             { id: 'family', icon: '🏡', title: 'Family', desc: 'A group of fun loving adventure', people: '3 to 5 people' },
//             { id: 'friends', icon: '⛵', title: 'Friends', desc: 'A bunch of thrill-seekers', people: '5 to 10 people' },
//           ].map((opt) => (
//             <div
//               key={opt.id}
//               className={`p-6 w-[300px] text-center rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-1 
//                 ${formData?.traveler == opt.people
//                   ? 'bg-green-500 text-white border-3 border-black' 
//                   : 'bg-white text-black hover:bg-green-500 hover:text-white'}`}
//               onClick={() => handleInputChange('traveler',opt.people)}              
//             >
//               <h2 className="text-2xl">{opt.icon}</h2>
//               <h2 className="text-xl font-semibold">{opt.title}</h2>
//               <p>{opt.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mt-8 flex justify-end px-5 sm:px-10 pb-5">
//         <button className="text-white" onClick={OnGenerateTrip}>
//           Generate Trip
//         </button>
//       </div>
//     </>
//   );
// }

// export default Hero;
