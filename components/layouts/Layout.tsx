import Head from "next/head";
import { Navbar } from "../ui";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ?? "Pokemon App"}</title>
        <meta name="author" content="Diego Román" />
        <meta name="description" content={`Información sobre el pokemon ${title}` }/>
        <meta name="keywords" content={`${title}, pokemos, etc.`}/>
      </Head>

      <Navbar />
    
      <main style={{padding: '0px 20px'}}>{children}</main>
    </>
  );
};
