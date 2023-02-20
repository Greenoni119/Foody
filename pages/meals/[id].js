import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { BeatLoader } from 'react-spinners';
import Image from 'next/image';
import { FaHeartBroken, FaHeart } from 'react-icons/fa';
import toast from 'react-hot-toast';
import PointText from '../../components/text/PointText';
import IngredientsTable from '../../components/mealsPage/IngredientsTable';
import { Button } from '../../components/button/Button';


export const getSingleMeal = async ({ queryKey }) => {
  const { data } = await axios.get(`/lookup.php?i=${queryKey[1]}`);
  return data?.meals?.[0];
};

function SingleMeals() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useQuery(['singleMeal', id], getSingleMeal);
  const [isSaved, setIsSaved] = React.useState(false);

  useEffect(() => {
    if (localStorage.getItem('savedMeals')) {
      const savedMeals = JSON.parse(localStorage.getItem('savedMeals'));
      if (savedMeals.includes(id)) {
        setIsSaved(true);
      } else {
        setIsSaved(false);
      }
    } else {
      localStorage.setItem('savedMeals', JSON.stringify([]));
    }
  }, [id]);

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading || !data) {
    return (
      <BeatLoader color="#fff" size={20} />
    );
  }

  const ingredients = Object.keys(data).filter((key) => key.startsWith('strIngredient')).filter((key) => data[key] !== '' && data[key] !== null);

  const ingredientsWithMeasures = ingredients.map((key, index) => ({
    index: index + 1,
    ingredient: data[key],
    measure: data[`strMeasure${index + 1}`],
  }));

  const handleSaveButtonClick = async () => {
    const savedMeals = JSON.parse(localStorage.getItem('savedMeals'));
    if (!isSaved) {
      savedMeals.push(data.idMeal);
      localStorage.setItem('savedMeals', JSON.stringify(savedMeals));
      toast.success('Meal saved successfully');
      setIsSaved(true);
    } else {
      savedMeals.splice(savedMeals.indexOf(data.idMeal), 1);
      localStorage.setItem('savedMeals', JSON.stringify(savedMeals));
      setIsSaved(false);
      toast.error('Meal Removed successfully');
    }
  };

  return (
    <div className=''>
      <div className='m-5'>
        <div className='pt-20 text-center pb-5' >
        <h1 className='text-3xl text-red-600 pb-5' >{data.strMeal}</h1>
          <Image className='mx-auto' src={data.strMealThumb} height={300} width={300} alt={data.strMeal} />
        </div>
        <div >
          <div className='text-center'>
          <PointText >
            Category:
            {' '}
            {data.strCategory}
          </PointText>
          <PointText >
            Origin:
            {' '}
            {data.strArea}
          </PointText>
          </div>

          <div  className='flex justify-center pt-5 text-3xl'>
          <Button variant="primary"  onClickHandler={handleSaveButtonClick}>
            {isSaved ? (
              <>
                <FaHeartBroken className='flex justify-center text-red-700'/>
                {' '}
                <h1  className='text-red-700'>Remove</h1>
              </>
            ) : (
              <>
                <FaHeart className='flex justify-center text-red-400' />
                { ' '}
                <h1 className='text-red-400'>Save</h1>
              </>
            ) }
          </Button>
        </div>

        </div>
      </div>


      <div className='text-center'>
        <IngredientsTable ingredientsWithMeasures={ingredientsWithMeasures} />
      </div>
      <div className='mx-auto pt-10 pb-10 max-w-7xl' >
        <h1 className='text-5xl text-red-600 ml-6 pb-5'>Instructions</h1>
        {data.strInstructions.split('.').filter((sentence) => sentence !== '').map((sentence) => (
          <p className='text-xl text-stone-500 m-5 text-left pb-15' key={sentence}>
            {sentence}
            .
          </p>
        ))}
      </div>

</div>
  );
}

export default SingleMeals;
