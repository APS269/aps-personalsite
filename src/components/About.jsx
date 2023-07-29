import React from 'react';

const About = () => {
  return (
    <div name="about" className='min-h-screen w-full bg-gradient-to-b from-black via-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl sm:text-7xl font-bold text-white'>
            About
          </p>

          <p className='text-gray-500 py-4 mt-10'>
            I am a highly motivated individual with a strong desire for continuous learning and personal growth. My skills include Python, C++, JavaScript, React.js, and Node.js. Through hands-on projects, such as the dynamic To-Do List web application and the Keeper App using React.js, I have honed my development abilities and gained valuable experience in implementing efficient solutions.
          </p>

          <p className='text-gray-500 py-4'>
            Education-wise, I am pursuing B.Tech, and so far, I have excelled with a remarkable score of 91.26% until the 5th semester. In addition, I have achieved outstanding academic performance in previous grades, scoring 86.6% in 12th-grade and 90.6% in 10th grade. Alongside my formal education, I actively engage in online courses, enhancing my knowledge in diverse areas, including data structures and algorithms (DSA) using C++, Python development, and web development.
          </p>

          <p className='text-gray-500 py-4'>
            I am committed to excellence and adaptability, always seeking growth opportunities to expand my skillset further. My passion for learning, combined with a results-driven approach, equips me to make valuable contributions and excel in any challenging environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
