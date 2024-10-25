import { Hero } from '../../components/Hero';
import { RandomRecipes } from '../../components/RandomRecipes';
import { Statictics } from '../../components/Statictics';

const Home = () => {
  return (
    <>
      <Hero />
      <Statictics />
      <RandomRecipes />
    </>
  );
};

export default Home;
