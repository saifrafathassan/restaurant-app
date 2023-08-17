import React, { useState } from 'react'
import {data} from '../data/data'

const Food = () => {
    const [foods, setFoods] = useState(data)

    // fliter
const filterType = (category) => {
    setFoods(
        data.filter((item) => {
            return item.category === category
        })
    )
}
const filterPrice = (price) => {
    setFoods(
        data.filter((item) => {
            return item.price === price
        })
    )
}

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated</h1>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div>
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={()=> setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                <button onClick={() => filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                <button onClick={() => filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                <button onClick={() => filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                <button onClick={() => filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chickens</button>
            </div>
        </div>

        <div>
            <p className='font-bold text-gray-700'>Filter Price</p>
            <div className='flex justify-between max-w-[390px] w-full'>
            <button onClick={() => filterPrice('$15')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$15</button>
            <button onClick={() => filterPrice('$40')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$40</button>
            <button onClick={() => filterPrice('$55')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$55</button>
            <button onClick={() => filterPrice('$70')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$70</button>
            </div>
        </div>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 pt-4 gap-6'>
        {foods.map((item) => (
            <div key={item.id} className='border shadow-lg hover:scale-105 duration-300'>
                <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                <div className='flex justify-center px-2 py-4'>
                    <p>{item.name}</p>
                    <p className='pl-1'><span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span></p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Food
