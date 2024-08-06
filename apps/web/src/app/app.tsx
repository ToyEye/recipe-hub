import { useEffect } from 'react';

import { trpcClient } from '../services/trpc';
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

export function App() {
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await trpcClient.recipes.getRecipes.query();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <NxWelcome title="web" />
    </div>
  );
}

export default App;
