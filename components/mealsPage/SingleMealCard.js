import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function SingleMealCard({ meal }) {
  return (
<div className='meals_item p-7'>
  <Link href={`/meals/${meal.idMeal}`}>
    <div className=''>
      <h1 className=' text-center p-3 text-red-600 border-4 rounded-3xl  border-red-600 ' variant="secondary">{meal.strMeal}</h1>
      <Image className='rounded-3xl pt-5 mx-auto' src={meal.strMealThumb} height="100" width="200" alt={meal.strMeal} />
    </div>
  </Link>
</div>

  );
}

export default SingleMealCard;
 