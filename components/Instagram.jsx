/* eslint-disable react/jsx-key */
import React from 'react'
import IgImg1 from '../public/ig-img-1.jpeg';
import IgImg2 from '../public/ig-img-2.jpeg';
import IgImg3 from '../public/ig-img-3.jpeg';
import IgImg4 from '../public/ig-img-4.jpeg';
import IgImg5 from '../public/ig-img-5.jpeg';
import IgImg6 from '../public/ig-img-6.jpeg';
import atendant from '../public/atendant.jpg';
import InstagramImg from './InstagramImg';
import cardList from '../pages/data.js';
import Hero from '../components/Hero';

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>courses</p>
        <p className='pb-4'>@Peak</p>
        <div className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-11 p-5 '>
          {cardList.map(card =>(
            // eslint-disable-next-line @next/next/no-img-element
           <div className='shadow-lg rounded-lg'>
           <>
              <div>          
              <img className='rounded-t-lg' src={card.img} alt=" " />
              </div>
                <h3 className='text-3xl font-bold text-slate-700 mb-3 p-1'>{card.title}</h3></>
                <p className='text-lg font-normal text-gray-600 p-4'>{card.text}</p>
                <button className='px-8 py-2 border bg-red-500 rounded'>{card.button}</button>
          </div>  
          ))}
            
        </div>
    </div>
  )
}

export default Instagram

//hover:bg-black
//<InstagramImg socialImg={IgImg1} />