# Bootstrap

```bash
npm i --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin
npm i --save bootstrap @popperjs/core
npm i --save-dev autoprefixer css-loader postcss-loader sass sass-loader style-loader

npm i --save-dev webpack webpack-cli \
    babel-loader @babel/core @babel/preset-env \
    tailwindcss@latest postcss@latest autoprefixer@latest \
    postcss-loader html-webpack-plugin

npm install --save-dev mini-css-extract-plugin terser-webpack-plugin
npm install --save-dev @tailwindcss/forms @tailwindcss/aspect-ratio @tailwindcss/typography tailwindcss-children

# SPA

npm install react react-dom react-router-dom

# API fetch
npm install axios
npm install react-query # 버전문제가 있음.
npm install @tanstack/react-query
```

```tsx
import axios from 'axios';

export interface ICategories {
    id: number;
    name: string;
}

export const fetchCategories = async (): Promise<ICategories[]> => {
    const response = await axios.get<ICategories[]>('https://api.vivabm.com/api/category/list');
    return response.data;
};
```

```tsx
import React from 'react';
import { useQuery } from 'react-query';
import { fetchCategories, ICategories } from '@/services/MyService';

const Demo: React.FC = () => {
  const { data: categories, error, isLoading } = useQuery<ICategories[]>('categories', fetchCategories);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;

  return (
    <div className="container-fluid h-screen bg-rose-50 p-8">
      <div className="row row-cols-2">
        <div>
          <button type="button" className="btn btn-outline-primary">
            Hello, World!
          </button>
        </div>
        <div>
          <h2>Categories</h2>
          <ul>
            {categories?.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Demo;

```

```tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories, ICategories } from '@/services/MyService';

const Demo: React.FC = () => {
  const { data: categories, error, isLoading } = useQuery<ICategories[]>(['categories'], fetchCategories);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;

  return (
    <div className="container-fluid h-screen bg-rose-50 p-8">
      <div className="row row-cols-2">
        <div>
          <button type="button" className="btn btn-outline-primary">
            Hello, World!
          </button>
        </div>
        <div>
          <h2>Categories</h2>
          <ul>
            {categories?.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Demo;
```
