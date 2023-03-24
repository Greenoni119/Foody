import React from 'react';
import Link from 'next/link';
import {FaPizzaSlice} from 'react-icons/fa';
import Image from 'next/image';
function Navbar() {
  return (
<div>
<nav className='bg-white pb-10'>

      <Link href="/">
<FaPizzaSlice className=' m-2 p-2 float-left clear-right text-5xl text-red-600'/>
      </Link>
   
      <ul className=' float-right flex m-2 text-xl text-stone-500'>
        <li className='p-2  hover:text-red-600 transition duration-150'>
          <Link href="/savedMeals">Saved Recipes</Link>
        </li>
      </ul>
    </nav>
</div>
  );
}

export default Navbar;
