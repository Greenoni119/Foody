import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
<div>
<nav className='bg-white pb-10'>

      <Link href="/">
        <h1 className=' m-2 p-2 float-left clear-right text-3xl text-red-600'>
          FOOD&apos;y
        </h1>
      </Link>
   
      <ul className=' float-right flex m-2 text-3xl text-stone-500'>
        <li className='p-2 pr-5 hover:text-red-600 transition duration-150'>
          <Link href="/savedMeals">Saved Recipes</Link>
        </li>
      </ul>
    </nav>
</div>
  );
}

export default Navbar;
