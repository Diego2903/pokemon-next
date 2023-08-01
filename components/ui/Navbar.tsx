import { Link, Spacer, Text } from "@nextui-org/react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <div className={styles["container-menu"]}>
      <NextLink href="/" passHref legacyBehavior>
        <Link>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png"
            alt="Icono app"
            width={50}
            height={50}
          />
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites" passHref legacyBehavior>
        <Link css={{ marginRight: "10px" }}>
          <Text color="white" h3>
            Favoritos
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
