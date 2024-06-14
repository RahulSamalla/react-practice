import React from 'react';
import ConstructN_logo from './ConstructN_logo.png';
import logo1 from './logo1.png';
import logo2 from './logo2.jpg';
import logo3 from './logo3.jpg';
import logo4 from './logo4.jpg';
function Card(props) {
    return (
    <>
      <header class="bg-gray-800 text-white py-4  fixed top-0 w-full  shadow-md z-10">
  <div class="container mx-auto flex justify-between items-center overflow-hidden">
    
    <div class="flex items-center">
    
             <img src={ConstructN_logo} alt="logo of constructN" class="w-15 h-8 mr-5"/>


        
      {/* <img src={ConstructN_logo} alt="Logo" class="w-8 h-8 mr-2"/> */}
      {/* <img src={ConstructN_logo} alt="logo of constructN" /> */}

      {/* <h1 class="text-lg font-semibold">YourLogo</h1> */}
    </div>

    
    <div class="flex items-center">
      <input type="text" placeholder="Search..." class="px-4 py-2 bg-gray-700 rounded-md mr-4 text-white focus:outline-none focus:bg-gray-600"/>

      
      {/* <button class="px-4 py-2 bg-blue-600 text-white rounded-md">Search</button>  */}
    </div>
  </div>
</header>

      <div><p class="px-6 pt-20 ">Welcome, Krishna Teja!</p></div>
      
      <div class="grid grid-cols-5 gap-6  pt-2 ml-5 mr-5 ">
    {/* <!-- First Row --> */}
      <div class="flex flex-col bg-white rounded-md p-4 shadow-md">
      <img src={logo1} alt="Company Logo 1" className="w-24 h-24 object-contain mb-4"/>
      <div className="flex-grow border-b border-gray-300"></div>
      <h2 class="text-lg font-semibold">UCSD Ridge Walk</h2>
      <p class="text-gray-400">Captures</p>
      <ul class="list-disc p-4">
        <li>360 photos</li>
        <li>360 Video Walks</li>
        <li>Phone Images</li>
        <li>Phone Video Walks</li>
        <li>Drone Flights</li>
      </ul>
      
      
    </div>

    <div class="flex flex-col bg-white rounded-md p-4 shadow-md">
    <img src={logo1} alt="Company Logo 1" className="w-24 h-24 object-contain mb-4" />
      <div className="flex-grow border-b border-gray-300"></div>
      <h2 class="text-lg font-semibold">PHX 81 DATA CENTER</h2>
      <p class="text-gray-400">Captures</p>
      <ul class="list-disc p-4">
        <li>360 photos</li>
        <li>360 Video Walks</li>
        <li>Phone Images</li>
        <li>Phone Video Walks</li>
        <li>Drone Flights</li>
      </ul>
    </div>

    <div class="flex flex-col bg-white rounded-md p-4 shadow-md">
      <img src={ConstructN_logo} alt="Company Logo 3" className="w-24 h-20 object-contain mb-4"/>
      <div className="flex-grow border-b border-gray-300"></div>

      <h2 class="text-lg font-semibold">Surdside Rehab</h2>
      <p class="text-gray-400"> Captures</p>
      <ul class="list-disc p-4">
        <li>360 photos</li>
        <li>360 Video Walks</li>
        <li>Phone Images</li>
        <li>Phone Video Walks</li>
        <li>Drone Flights</li>
      </ul>
    </div>

    <div class="flex flex-col bg-white rounded-md p-4 shadow-md">
      <img src={logo2} alt="Company Logo 4" class="w-20 h-15 pt-8  mb-4 "/>
      <div className="flex-grow border-b border-gray-300"></div>

      <h2 class="text-lg font-semibold">Walmart Food Hall</h2>
      <p class="text-gray-400">Captures</p>
      <ul class="list-disc p-4">
        <li>360 photos</li>
        <li>360 Video Walks</li>
        <li>Phone Images</li>
        <li>Phone Video Walks</li>
        <li>Drone Flights</li>
      </ul>
    </div>

  
    <div class="flex flex-col bg-white rounded-md p-4 shadow-md">
      <img src={ConstructN_logo} alt="Company Logo 5" class="w-20 h-15 pt-8  mb-4"/>
      <div className="flex-grow border-b border-gray-300"></div>

      <h2 class="text-lg font-semibold">Riyas</h2>
      <p class="text-gray-400">Captures</p>
      <ul class="list-disc p-4">
        <li>360 photos</li>
        <li>360 Video Walks</li>
        <li>Phone Images</li>
        <li>Phone Video Walks</li>
        <li>Drone Flights</li>
      </ul>
    </div>
</div>
<div class="grid grid-cols-5 gap-6 ml-5 mr-5 pt-3 ">
<div class="flex flex-col bg-white rounded-md p-4 shadow-md">
      <img src={logo1} alt="Company Logo 1" className="w-24 h-24 object-contain mb-4"/>
      <div className="flex-grow border-b border-gray-300"></div>
      <h2 class="text-lg font-semibold">PittsBurgh International airport</h2>
      <p class="text-gray-400">Captures</p>
      <ul class="list-disc p-4">
        <li>360 photos</li>
        <li>360 Video Walks</li>
        <li>Phone Images</li>
        <li>Phone Video Walks</li>
        <li>Drone Flights</li>
      </ul>
    </div>

    <div class="flex flex-col bg-white rounded-md p-4 shadow-md">
    <img src={logo3} alt="Company Logo 1" className="w-24 h-24 object-contain mb-4" />
      <div className="flex-grow border-b border-gray-300"></div>
      <div><h2 class="text-lg font-semibold p-3">HONOULILL  WWTP</h2></div>
      <p class="text-gray-400">Captures</p>
      <ul class="list-disc p-4">
        <li>360 photos</li>
        <li>360 Video Walks</li>
        <li>Phone Images</li>
        <li>Phone Video Walks</li>
        <li>Drone Flights</li>
      </ul>
    </div>

    <div class="flex flex-col bg-white rounded-md p-4 shadow-md">
      <img src={ConstructN_logo} alt="Company Logo 3" className="w-24 h-20 object-contain mb-4"/>
      <div className="flex-grow border-b border-gray-300"></div>

      <div><h2 class="text-lg font-semibold p-3">Surdside Rehab</h2></div>
      <p class="text-gray-400">Captures</p>
      <ul class="list-disc p-4">
        <li>360 photos</li>
        <li>360 Video Walks</li>
        <li>Phone Images</li>
        <li>Phone Video Walks</li>
        <li>Drone Flights</li>
      </ul>
    </div>

    <div class="flex flex-col bg-white rounded-md p-4 shadow-md">
      <img src={logo4} alt="Company Logo 4" class="w-20  pt-5 mb-4"/>
      <div className="flex-grow border-b border-gray-300"></div>

     <div> <h2 class="text-lg font-semibold p-3">Common Wealth</h2></div>
      <p class="text-gray-400">Captures</p>
      <ul class="list-disc p-4">
        <li>360 photos</li>
        <li>360 Video Walks</li>
        <li>Phone Images</li>
        <li>Phone Video Walks</li>
        <li>Drone Flights</li>
      </ul>
    </div>

  
    <div class="flex flex-col bg-white rounded-md p-4 shadow-md">
      <img src={ConstructN_logo} alt="Company Logo 5" class="w-20 h-15 pt-8  mb-4"/>
      <div className="flex-grow border-b border-gray-300"></div>

      <h3 class="text-lg font-semibold">UCSD RWNLLN Mockup</h3>
      <p class="text-gray-400">Captures</p>
      <ul class="list-disc p-4">
        <li>360 photos</li>
        <li>360 Video Walks</li>
        <li>Phone Images</li>
        <li>Phone Video Walks</li>
        <li>Drone Flights</li>   
      </ul>
    </div>
  </div>


    </>        
     
        
    );
}

export default Card;