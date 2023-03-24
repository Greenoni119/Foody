import React from 'react';
import ButtonWithLink from '../button/Button';


function HeroSection() {
  return (
    <section className=' clear-right pb-60 pt-20'>
      <div className=''>
        <div className='text-center'>
        <h1 className='text-red-600 text-7xl pb-10'>FOOD&apos;y</h1> 
          <h1 className='text-xl pb-10 text-stone-500'> Search for food you want to make!</h1>
          <div >
            <ButtonWithLink link="/meals" variant="primary">Explore Recipes here </ButtonWithLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
