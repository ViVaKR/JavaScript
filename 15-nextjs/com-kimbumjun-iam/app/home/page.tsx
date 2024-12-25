'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchCategories, ICategories } from '../services/category';
import styles from './home.module.css';
import MenuBar from '../menubar/page';

const HomePage = () => {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery<ICategories[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;

  return (
    <>
      <MenuBar />
      <div className={styles.homeContainer}>
        <h1>Home</h1>

        <ul>
          {categories?.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
