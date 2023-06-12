import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "video-react/dist/video-react.css";
import { NextPageWithLayout } from "@/interfaces/core";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../stores";
import RootLayout from "@/layout/LayoutDefault";
import { Toaster } from "react-hot-toast";
import { SignContext, SignUseContext } from "@/context/SignContext";
import { useContext } from "react";
import { CartProvider } from "@/context/CartContext";

interface IAppProps extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: IAppProps) {
  const { isOpen } = useContext(SignContext);
  // const { sidebarToggle } = useContext(SidebarContext);
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = process.env.NEXT_PUBLIC_NETWORK_SOLANA as string;

  return (
    <Provider store={store}>
      <SignUseContext>
        <CartProvider>
          <RootLayout>
            <Component {...pageProps} />
            <Toaster position="top-center" reverseOrder={false} />
          </RootLayout>
        </CartProvider>
      </SignUseContext>
    </Provider>
  );
}

export default MyApp;
