import { useEffect, useState } from "react";

import {FavoritesPokemons} from "@/components/pokemon"
import { Layout } from "@/components/layouts";
import { Nofavorite } from '@/components/ui';
import { localFavorites } from "@/utils";

const favorites = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout>
      {favoritePokemons.length === 0 ? (
        <Nofavorite />
      ) : (
        <FavoritesPokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default favorites;