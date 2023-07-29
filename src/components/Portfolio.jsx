import React from 'react';
import password from "../assets/portfolio/password.jpg";
import keeper from "../assets/portfolio/keeper.jpg";
import todolist from "../assets/portfolio/todolist.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: keeper,
      demoLink: "https://aps-keeperapp.netlify.com", // Replace with actual demo link
      codeLink: "https://github.com/APS269/keeperApp", // Replace with actual GitHub link
    },
    {
      id: 2,
      src: todolist,
      demoLink: "https://good-turtleneck-shirt-bat.cyclic.app/", // Replace with actual demo link
      codeLink: "https://github.com/APS269/todolist", // Replace with actual GitHub link
    },
    {
      id: 3,
      src: password,
      demoLink: "https://github.com/APS269/passwordchecker", // Replace with actual demo link
      codeLink: "https://github.com/APS269/passwordchecker", // Replace with actual GitHub link
    },
  ];

  const handleDemoClick = (demoLink) => {
    window.open(demoLink, "_blank");
  };

  const handleCodeClick = (codeLink) => {
    window.open(codeLink, "_blank");
  };

  return (
    <div name="portfolio" className='h-auto w-full bg-gradient-to-b from-black via-gray-800 to-black text-white py-8'>
      <div className='min-h-screen max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl sm:text-7xl font-bold text-white'>Portfolio</p>
          <p className='text-gray-500 py-4 mt-4 sm:mt-20'>
            Check out some of my projects right here
          </p>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-6'>
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className='flex items-center justify-center'>
                <button
                  className='w-full sm:w-1/2 px-6 py-3 m-2 sm:m-4 duration-200 hover:scale-105'
                  onClick={() => handleDemoClick(demoLink)}
                >
                  Demo
                </button>
                <button
                  className='w-full sm:w-1/2 px-6 py-3 m-2 sm:m-4 duration-200 hover:scale-105'
                  onClick={() => handleCodeClick(codeLink)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
