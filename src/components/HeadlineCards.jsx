import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* card */}
      <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
        src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
      </div>
      <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
            <p className='px-2'>Added Daily</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
        src="https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
      </div>
      <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
            <p className='px-2'>Tasty Treats</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
        src="https://images.unsplash.com/photo-1564093497595-593b96d80180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
      </div>
    </div>
  )
}

export default HeadlineCards
