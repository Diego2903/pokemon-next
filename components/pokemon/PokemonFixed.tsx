import React, { useEffect, useState } from "react";

import { NextPage } from "next";
import Image from "next/image";
import { Grid, Card, Button, Container, Text } from "@nextui-org/react";

import conffeti from "canvas-confetti";

import { localFavorites } from "@/utils";
import { PokemonFull } from "@/interface";

interface Props {
  pokemon: PokemonFull;
}

export const PokemonFixed: NextPage<Props> = ({ pokemon }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleChangeFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsFavorite(!isFavorite);

    if (isFavorite) return;

    conffeti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  useEffect(() => {
    setIsFavorite(localFavorites.isFavorite(pokemon.id));
  }, [pokemon.id]);

  return (
    <Grid.Container css={{ marginTop: "5px" }} gap={2}>
      <Grid xs={12} sm={6} md={4}>
        <Card isHoverable css={{ padding: "30px", backgroundColor: "#000000" }}>
          <Card.Body>
            <Card.Image
              src={
                pokemon.sprites.other?.dream_world.front_default ??
                "no-image.png"
              }
              alt="Image Pokemon"
              width="100%"
              height={200}
            />
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={8}>
        <Card css={{ backgroundColor: "#000000" }}>
          <Card.Header
            css={{ display: "flex", justifyContent: "space-between" }}
          >
            <Text h3 transform="capitalize">
              {pokemon.name}{" "}
            </Text>
            <Button
              color="gradient"
              ghost={!isFavorite}
              onClick={toggleChangeFavorite}
            >
              {isFavorite ? "En favoritos" : "Guardar en favoritos"}
            </Button>
          </Card.Header>
          <Card.Body>
            <Text size={20}>Sprites:</Text>
            <Container direction="row" display="flex" gap={0}>
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
            </Container>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};
