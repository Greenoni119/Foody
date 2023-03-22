import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useQueries } from '@tanstack/react-query';
import { BeatLoader } from 'react-spinners';
import { getSingleMeal } from './meals/[id]';

function SavedMeals() {
  const [savedMealsId, setSavedMealsId] = useState([]);

  const queries = savedMealsId.map((id) => (
    {
      queryKey: ['singleMeal', id],
      queryFn: getSingleMeal,
    }
  ));

  const result = useQueries({ queries });

  useEffect(() => {
    if (localStorage.getItem('savedMeals')) {
      setSavedMealsId(JSON.parse(localStorage.getItem('savedMeals')));
    }
  }, []);

  return (
    <div className='pt-20'>
      <h1 className='text-center text-5xl text-red-600 pt-20 '>Saved Recipe List</h1>
      <div className='justify-center pt-20' >
        {savedMealsId.length <= 0 && <h1 className='text-center text-4xl text-stone-500 pt-60'>You have no saved Recipes</h1>}
        {result && result.map(({ data, isLoading }, index) => {
          if (isLoading) {
            return (
              <BeatLoader key={savedMealsId[[index]]} color="#fff" loading={isLoading} size={20} />
            );
          }
          return (
            <div key={data.idMeal}>
  <Link href={`/meals/${data.idMeal}`}>
    <div className='flex justify-center p-10'>
      <h1 className='p-5 border-4 border-red-600 rounded-full text-4xl text-red-400 hover:text-red-600 transition duration-150' variant="secondary" >{data.strMeal}</h1>
    </div>
  </Link>
</div>
          );
        })}
      </div>
    </div>

  );
}

export default SavedMeals;
{/*
<div>
            <Link href={`/meals/${data.idMeal}`} key={data.idMeal}>
              <div className='flex justify-center p-10'>
                <h1 className=' p-5 border-4 border-red-600 rounded-full text-4xl text-red-400 hover:text-red-600 transition duration-150' variant="secondary" >{data.strMeal}</h1>
              </div>
            </Link>
            </div>

*/}