import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function SingleMealCard({ meal }) {
  return (
<div className='meals_item p-7'>
  <Link href={`/meals/${meal.idMeal}`}>
    <div className=' pb-3'>
      <h1 className=' text-center text-4xl p-5 text-red-600 border-4 rounded-3xl  border-red-600' variant="secondary">{meal.strMeal}</h1>
      <Image className='rounded-3xl pt-5 mx-auto' src={meal.strMealThumb} height="200" width="300" alt={meal.strMeal} />
    </div>
  </Link>
</div>

  );
}

export default SingleMealCard;
 