import {Container, Text, Image} from "@nextui-org/react"

export const Nofavorite = () => {
  return (
    <Container css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: "calc(100vh - 100px)"
    }}>
        <Text h1>
            No hay Favoritos
        </Text>
        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg"
            width={250}
            height={250}
            css={{opacity: 0.1}}
            alt="image Pokemon"
        />
    </Container>
  )
}
