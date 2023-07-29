import React from 'react';
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import cplusplus from "../assets/cplusplus.png";
import css from "../assets/css.png";
import snakes from "../assets/snakes.png"

const Learning = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: javascript,
      title: 'JAVASCRIPT',
      style: 'shadow-yellow-500'
    },
    {
      id: 3,
      src: react,
      title: 'REACT',
      style: 'shadow-blue-600'
    },
    {
      id: 4,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-400'
    },
    {
      id: 5,
      src: node,
      title: 'NODE',
      style: 'shadow-green-400'
    },
    {
      id: 6,
      src: tailwind,
      title: 'TAILWIND',
      style: 'shadow-blue-400'
    },
    {
      id: 7,
      src: cplusplus,
      title: 'C++',
      style: 'shadow-purple-600'
    },
    {
      id: 8,
      src: snakes,
      title: 'PYTHON',
      style: 'shadow-yellow-600'
    },
    // Add more technologies as needed...
  ];

  return (
    <div name="learning" className='min-h-screen w-full bg-gradient-to-b from-black via-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl sm:text-6xl font-bold text-white'>Learning</p>
          <p className='text-gray-500 py-4 mt-20'>These are the technologies I am learning</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt={title} className="rounded-md duration-200 hover:scale-105 w-16 mx-auto"  />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Learning;
