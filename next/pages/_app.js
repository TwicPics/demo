import "tailwindcss/tailwind.css";
import { installTwicPics } from "@twicpics/components/react";
import "@twicpics/components/style.css";

installTwicPics({
  domain: "https://demo.twic.pics",
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
