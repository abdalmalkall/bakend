import React from 'react';
import FrstSection from './FrstSection';
import SecondSection from './SecondSection';
import FourthSection from './FourthSection';
import ThirdSection from './ThirdSection';
import PopoularCourses from './PopoularCourses';
import Mentors from './Mentors';
import OurCertificationsAndOurCollaborations from './OurCertificationsAndOurCollaborations';



const Home = () => {



  return (
    <>
      <FrstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <PopoularCourses/>
      <img src="/src/assets/images/OurAchievements.png" className='mt-5 ml-4' />
      <Mentors/>
      <OurCertificationsAndOurCollaborations/>
      
      
      {/* <img src="/src/assets/images/OurCertifications.png" className='mt-5 ml-4' /> */}



    </>
  );
};

export default Home;