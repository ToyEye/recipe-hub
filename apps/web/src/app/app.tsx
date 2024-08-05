// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect } from 'react';
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { trpcClient } from '../services/trpc';

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
