import Head from "next/head";
import HomePage from "@/components/pages/HomePage";
import { Provider } from "react-redux";

import store from "@/store";
export default function Home() {
  return (
    <>
      <Head>
        <title>My garage</title>
        <meta name="description" content="Info about your favourite cars" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </>
  );
}
