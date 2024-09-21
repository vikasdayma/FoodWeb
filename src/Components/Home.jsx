import React from 'react'
import './Home.css'
import Hero from './Hero'
import BackgroundCircle from './BackgroudCircle'
import SmallSphere from './SmallSphere'
const Home = () => {

  return (
<section className= ' absolute transform-origin h-[200vh]  w-[100%] ' 
  style={{backgroundImage:"url(background.webp)",backgroundSize:"cover",overflow:"hidden"}}
 >
 
  
   <BackgroundCircle design='  xl:w-[90vw] w-[75rem]  borderWhite    '>
   </BackgroundCircle>
    
   <BackgroundCircle design='  xl:w-[75vw] w-[65rem]  borderWhite    '>
   </BackgroundCircle>
   
   <BackgroundCircle design='  xl:w-[65vw] w-[55rem] borderWhite    '>
   </BackgroundCircle>
   
   <BackgroundCircle design='  xl:w-[46vw] w-[36rem] borderWhite    '>
   </BackgroundCircle>
   
   <BackgroundCircle design='  xl:w-[35vw] w-[25rem] borderWhite    '>
   </BackgroundCircle>

   
   
   <SmallSphere design1='rotate-[46deg]' design2='w-2 h-2 animate -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100'>
   </SmallSphere>

   <SmallSphere design1='-rotate-[56deg]' design2='w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100'>
   </SmallSphere>

   <SmallSphere design1='rotate-[54deg]' design2='hidden w-4 h-4  ml-20 mt-[8.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out translate-y-0 opacity-100'>
   </SmallSphere>

   <SmallSphere design1='-rotate-[65deg]' design2='animate w-3 h-3 -ml-1.5 mt-24 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100'>
   </SmallSphere>

   <SmallSphere design1='-rotate-[85deg]' design2='w-6 h-6  -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full animate transition-transform duration-500 ease-out translate-y-0 opacity-100'>
   </SmallSphere>

   <SmallSphere design1='rotate-[70deg]' design2='w-6 h-6  mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full animate transition-transform duration-500 ease-out translate-y-0 opacity-100'>
   </SmallSphere>
{/*    
   <div  className='    rotate-[46deg]'>
   <div className='w-2 h-2 animate -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100'></div>
   </div>
    
   <div  className= '  absolute animate bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]'>
   <div className='w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100'></div>
   </div>


   <div  className='absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]'>
   <div className='hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out translate-y-0 opacity-100'></div>
   </div>

   <div  className='absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]'>
   <div className= ' animate w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100'></div>
   </div>

   <div  className='absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]'>
   <div className=' w-6 h-6 -ml-7 -mt-10 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full animate transition-transform duration-500 ease-out translate-y-0 opacity-100'></div>
   </div>

   <div  className='absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]'>
   <div className='w-6 h-6 ml-10 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full animate transition-transform duration-500 ease-out translate-y-0 opacity-100'></div>
   </div> */}



   <div className='flex justify-center   mt-40'>

   <div className='explore absolute   '> 

  <h1 className='sm:text-6xl text-4xl text-white font-bold lg:ml-32 ml-10 '>Explore the Possibilities</h1>
   <div className='lg:flex sm:text-6xl text-4xl text-white font-bold '>
   <h1 className='ml-10'>
   of AI Chatting with
   </h1>
   <div className='lg:ml-3 ml-10 ' >
   <span className=' lg:ml-2'>BrainWave</span>
   <img src="curve.webp"   className=' sm:w-80 m1-1 sm:h-3  h-1 w-48'  alt="" />
   </div>
   </div>
  <br />    

  <h1 className='text-xl lg:ml-32 ml-10  font-bold text-white opacity-60'>Unleash the power of AI within Brainwave. Upgrade your productivity with ,</h1>  
  <h1 className='text-xl lg:ml-32 ml-10  font-bold text-white opacity-60'> Brainwave the open AI chat app </h1>
  <br />
  <br />
  <div className='lg:ml-32 ml-10'>
  <button className='text-black h-10 w-32 bg-white rounded-tr-sm'>Get Started</button>
  </div>
  </div>
  </div>
  </section>


  )
}

export default Home




