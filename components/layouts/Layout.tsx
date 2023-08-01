import Head from "next/head";
import { Navbar } from "../ui";
import { FC } from "react";


interface Props {
  children: React.ReactNode;
  title?: string;
}

const origin  = (typeof window === "undefined" ) ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ?? "Pokemon App"}</title>
        <meta name="author" content="Diego Román" />
        <meta name="description" content={`Información sobre el pokemon ${title}` }/>
        <meta name="keywords" content={`${title}, pokemos, etc.`}/>

        <meta property="og:title" content={`Información sobre ${title}`}/>
        <meta property="og:description" content={`Pagina con información basica del pokemon ${title} y sus caracteristicas` }/>
        <meta property="og:image" content={`${origin}/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.eaa34bba.png&w=256&q=75`}/>
      </Head>

      <Navbar />
    
      <main style={{padding: '0px 20px'}}>{children}</main>
    </>
  );
};
