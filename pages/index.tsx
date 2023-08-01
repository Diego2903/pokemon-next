import { Grid } from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { PokemonList, SmallPokemon } from "@/interface";
import { PokemonCard } from "@/components/pokemon";

const title = [
  {
    title: "titulo 1",
    name: "Pokemon 1",
  },
  {
    title: "titulo 2",
    name: "Pokemon 2",
  },
  {
    title: "titulo 3",
    name: "Pokemon 3",
  },
];

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout title={title[0].title}>
       
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonList>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};
