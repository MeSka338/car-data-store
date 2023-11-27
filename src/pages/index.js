import Head from "next/head";
import Home from "@/components/pages/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>My garage</title>
        <meta name="description" content="Info about your favourite cars" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
