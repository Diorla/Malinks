import type { AppProps } from "next/app";
import UserProvider from "../context/userContext";

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
