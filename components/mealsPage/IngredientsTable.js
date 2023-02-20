import React from 'react';

function IngredientsTable({ ingredientsWithMeasures }) {
  return (
    <>
      <h1 className=' pt-10 pb-10 text-5xl text-red-600'>Ingredients</h1>
      <table className='mx-auto '>
        <tbody className=''>
          {ingredientsWithMeasures.map((ingredient) => (
            <tr key={ingredient.index}>
              <td>
                <h1 className='text-2xl text-left pb-3 pr-20 text-stone-600'>
                  {ingredient.ingredient}
                </h1>
              </td>
              <td>
                <h1 className='text-2xl text-right pb-3 text-stone-600'>
                  {ingredient.measure}
                </h1>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default IngredientsTable;
