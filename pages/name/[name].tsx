import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { getPokemonInfo,  } from "@/utils";
import { PokemonFull, PokemonList } from "@/interface";
import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { PokemonFixed } from "@/components/pokemon";


interface Props {
  pokemon: PokemonFull;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  
  return (
    <Layout title={`Pokémon ${pokemon.name}`}>
      <PokemonFixed pokemon={pokemon}/>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonList>('/pokemon?list=151');
  const nameData: string[] = data.results.map(pokemon => pokemon.name);

  return {
    paths: nameData.map(name => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name)
    },
  };
};

export default PokemonByNamePage;
