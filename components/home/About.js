import React from 'react';
import Title from '../text/Title';

function About() {
  return (
    <div className='max-w-screen-xl mx-auto'>
    <div className='text-center'>
      <Title >About FOOD&apos;y</Title>
      <p className='text-stone-500 text-2xl pt-3 leading-8 m-5'>
        this is an api driven application from MealsDB that i originally created for my grandmother, she was tired of making the same dishes all the time and wanted to widen her skills in the kitchen and asked me to create a wide banded recpie app
        .   
      </p>
    </div>
    </div>
  );
}

export default About;
