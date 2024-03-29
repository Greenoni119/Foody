import axios from 'axios';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { getSingleMeal } from './meals/[id]';
import '../styles/globals.css'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1 * 60 * 60 * 1000,
      staleTime: 1 * 60 * 60 * 1000,
    },
  },
});

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1/';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (localStorage.getItem('savedMeals')) {
      const savedMeals = JSON.parse(localStorage.getItem('savedMeals'));
      savedMeals.forEach((mealId) => {
        queryClient.prefetchQuery(['singleMeal', mealId], getSingleMeal);
      });
    } else {
      localStorage.setItem('savedMeals', JSON.stringify([]));
    }
  }, []);

  return (
    <>
      <Head>
        <title>FOOD&apos;y</title>
        <meta name="description" content="food&apos;y is a listing website of recipes" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontSize: '1.4rem',
            },
          }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
