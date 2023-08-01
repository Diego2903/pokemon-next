import { GetStaticProps, NextPage, GetStaticPaths } from "next";

import { Layout } from "@/components/layouts";
import { PokemonFull } from "@/interface";
import { getPokemonInfo } from "@/utils";
import { PokemonFixed } from "@/components/pokemon";

interface Props {
  pokemon: PokemonFull;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  return (
    <Layout title={`Pokémon ${pokemon.name}`}>
      <PokemonFixed pokemon={pokemon} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const countPokemons = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: countPokemons.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  return {
    props: {
      pokemon: await getPokemonInfo(id),
    },
  };
};

export default PokemonPage;
