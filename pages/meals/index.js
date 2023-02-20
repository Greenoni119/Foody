import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import BeatLoader from 'react-spinners/BeatLoader';
import SearchBar from '../../components/mealsPage/SearchBar';
import SingleMealCard from '../../components/mealsPage/SingleMealCard';
import { motion } from 'framer-motion';


const override = {
  display: 'inline-block',
  margin: '0 auto',
};

const getMeals = async ({ queryKey }) => {
  const { data } = await axios.get(`filter.php?c=${queryKey[1]}`);
  return data?.meals || [];
};

const getQueriedMeals = async ({ queryKey }) => {
  const { data } = await axios.get(`search.php?s=${queryKey[1]}`);
  return data?.meals || [];
};

const getCategories = async () => {
  const { data } = await axios.get('/categories.php');
  return data.categories;
};

function Meals() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState('');

  const {
    data: categories, isLoading: categoryIsLoading, isError: categoryIsError, error: categoryError,
  } = useQuery(['catagories'], getCategories);

  const {
    data: queriedData, isLoading: queryIsLoading, isError: queryError,
  } = useQuery(['mealsByQuery', query], getQueriedMeals, {
    enabled: query !== '',
  });

  const {
    data, isLoading, isError,
  } = useQuery(['mealsByCategory', selectedCategory], getMeals, {
    enabled: query === '',
  });
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText) {
        setQuery(searchText);
        setSelectedCategory('');
      } else {
        setQuery('');
        if (categories) {
          setSelectedCategory(categories[0].strCategory);
        }
      }
    }, 300);
    return () => {
      setQuery('');
      clearTimeout(timeout);
    };
  }, [searchText, categories]);
  useEffect(() => {
    if (categories) {
      setSelectedCategory(categories[0].strCategory);
    }
  }, [categories]);

//----------------------------------------------------------------------------------------------------------
  return (
    <div> 
      <div className='pt-60'>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </div>
      {isLoading || categoryIsLoading ? (
        <div className='text-center pt-60'>
          <BeatLoader color="#D3494E" loading={isLoading || categoryIsLoading} size={20} />
        </div>
      ) : null}
 <div>
        {searchText.length > 0 && (

          <motion.div className='meals_container justify-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .5 }} 
         >

            { !isLoading && !isError
            && data && data.map((meal) => (
              <SingleMealCard key={meal.idMeal} meal={meal} />
            ))}
            { !queryIsLoading && !queryError
            && queriedData && queriedData.map((meal) => (
              <SingleMealCard key={meal.idMeal} meal={meal} />
            ))}

            {data && queriedData && data.length === 0 && queriedData.length === 0 && (
              <div className=''>
              <h1 className='text-center pt-60 text-6xl text-stone-600'>No meals found</h1>
              </div>
              
            )}

          </motion.div>
        )}
      </div>

    </div>
  );
}

export default Meals;
