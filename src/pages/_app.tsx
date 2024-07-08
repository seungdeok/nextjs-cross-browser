import RQProvider from "@/components/RQProvider";
import RecoilRootProvider from "@/components/RecoilProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRootProvider>
      <RQProvider>
        <Component {...pageProps} />
      </RQProvider>
    </RecoilRootProvider>
  );
}
