import React from 'react';
import HeroImage from "../assets/aps.png";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-gray-800 to-black'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            Tech Enthusiast
          </h2>
          <p className='text-gray-500 py-4'>
            Tech enthusiast with a passion for full-stack development. Learning React, Node.js, Python, and JavaScript. Eager to collaborate, contribute, and grow in the tech community. Aspiring to make a positive impact through innovative projects.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-800 to-gray-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-1/2 h-1/2 md:w-full' />
        </div>
      </div>
    </div>
  );
};

export default Home;
