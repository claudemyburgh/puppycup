import "../styles/globals.css";
import Navigation from "../components/nav/Navigation";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#3F3C97"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
        options={{
          showSpinner: false,
        }}
      />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
