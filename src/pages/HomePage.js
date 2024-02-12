import React from 'react';
import image1 from '../image/app.png';
import image2 from '../image/wall.jpg';
import image3 from '../image/payment.png';
import image4 from '../image/CecilBank.png';
import image5 from '../image/Coinbase.png';
import image6 from '../image/Paytm.png';
import image7 from '../image/TokaiBank.png';
import image8 from '../image/YampaValleyBank.png';
import image9 from '../image/sec.png'

const HomePage = () => {
  return (
    <div>
      <p className='text-7xl text-center font-bold mt-12'>WELCOME TO THE WORLD</p>
      <p className='text-6xl text-center font-bold mt-4'>MOST SECURE PAYMENT GATWAY</p>
      <div className='flex justify-center mt-20 relative'>
        <img src={image2} alt='...' className='w-60 h-60 absolute bottom-0 left-96 rounded-xl -mb-12'/>
        <img src={image1} alt='...' style={{height:'50%', width:'50%', borderRadius:12}}/>
        <img src={image3} alt='...' className='w-96 h-96 mt-12 absolute right-96 rounded-2xl' />
      </div>
      <div className='flex justify-center items-center gap-10 mt-28'>
        <img src={image4} alt='...' className='w-48 h-24'/>
        <img src={image5} alt='...' className='w-48 h-24'/>
        <img src={image6} alt='...' className='w-48 h-24'/>
        <img src={image7} alt='...' className='w-48 h-24'/>
        <img src={image8} alt='...' className='w-48 h-24'/>
        <img src={image9} alt='...' className='w-48 h-24'/>
      </div>
    </div>
  )
}

export default HomePage