import Link from 'next/link';
import React from 'react';


function ButtonWithLink({ link = '/', children, variant = 'secondary' }) {
  return (
    <div className='pt-10'>
    <Link href={link}>
      <span
        type="button"
        className='border-8 border-red-400 rounded-full text-5xl p-5 text-stone-600 hover:border-8 hover:border-red-500 hover:text-stone-700 transition duration-150'
      >
        {children}
      </span>
    </Link>
    </div>
  );
}
function Button({
  children, variant = 'secondary', className, onClickHandler,
}) {
  return (
    <button
      type="button"
      
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

export default ButtonWithLink;
export { Button };
