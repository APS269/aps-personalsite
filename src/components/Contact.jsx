import React from 'react';

const Contacts = () => {
  return (
    <div name="contact" className='h-screen w-full bg-gradient-to-b from-black via-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl sm:text-7xl font-bold text-white'>
            Contact
          </p>
          <p className='text-gray-500 py-4 mt-10'>
            Submit the form below to get in touch with me :-)
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <form action='https://getform.io/f/a03214ed-b7e7-4a06-9e5a-e1dc5df947e2' method='POST' className='flex flex-col w-full md:w-1/2'>
            <input type='text' name='name' placeholder='Enter your good Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <input type='text' name='email' placeholder='Enter your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <textarea name='message' placeholder='Enter your feedback' rows={10} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <button className='text-white bg-gradient-to-r from-blue-800 to-gray-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
