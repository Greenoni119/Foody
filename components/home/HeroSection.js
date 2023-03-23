import React from 'react';
import ButtonWithLink from '../button/Button';

function HeroSection() {
  return (
    <section className=' clear-right pb-60 pt-60'>
      <div className=''>
        <div className='text-center'>
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
