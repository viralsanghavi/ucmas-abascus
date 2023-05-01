import "src/styles/globals.css";
import Head from "next/head";
import {Fugaz_One, Open_Sans} from "@next/font/google";

const fugaz = Fugaz_One({
  weight: ["400"],
  subsets: ["latin"],
});
export const openSans = Open_Sans({
  weight: ["400"],
  subsets: ["latin"],
});
export default function App(props) {
  const {Component, pageProps} = props;
  return (
    <main className={[fugaz.className]}>
      <Head>
        <title>UCMAS</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Component {...pageProps} />
    </main>
  );
}
