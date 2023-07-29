import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/abhay-pratap-singh-113873217/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/APS269',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:abhay26902@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: './resume.pdf', // Replace with the actual path to your resume file
      style: 'rounded-br-md',
      download: true,
    },
  ];

  const handleToggleLinks = () => {
    setShowLinks((prevShowLinks) => !prevShowLinks);
  };

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <div className='fixed top-[35%] left-0 bg-black'>
      {isMobile && !showLinks && (
        <button
          onClick={handleToggleLinks}
          className='text-white w-fit px-6 py-3 my-2 mx-auto flex items-center rounded-md bg-gradient-to-r from-blue-800 to-gray-500 cursor-pointer'
        >
          Show Links
        </button>
      )}
      {(!isMobile || showLinks) && (
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
            >
              <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel='noreferrer'>
                {child}
              </a>
            </li>
          ))}
        </ul>
      )}
      {isMobile && showLinks && (
        <button
          onClick={handleToggleLinks}
          className='text-white w-fit px-6 py-3 my-2 mx-auto flex items-center rounded-md bg-gradient-to-r from-blue-800 to-gray-500 cursor-pointer'
        >
          Hide Links
        </button>
      )}
    </div>
  );
};

export default SocialLinks;
