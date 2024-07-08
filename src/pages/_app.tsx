import RQProvider from "@/components/RQProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RQProvider>
      <Component {...pageProps} />
    </RQProvider>
  );
}
