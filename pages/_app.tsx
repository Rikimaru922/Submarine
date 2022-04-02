import App from "next/app";
import Head from "next/head";
import css from "styled-jsx/css";
import { Provider } from "react-redux";
import React from "react";
import dynamic from "next/dynamic";
import withRedux from "next-redux-wrapper";
import store from "../store";
import 'swiper/swiper.min.css'
import Topbar from '../components/Topbar'
import { ThemeProvider } from '@mui/material/styles';
import { MuiTheme } from "../components/MuiTheme"

require("@solana/wallet-adapter-react-ui/styles.css");

const WalletConnectionProvider = dynamic(
  () => import("../components/WalletConnection/WalletConnectionProvider"),
  {
    ssr: false,
  }
);


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return {
      pageProps
    };
  }
  render() {
    const { Component, pageProps } = this.props;


    return (
      <BasicHTML>
        <WalletConnectionProvider>
          <Provider store={store}>
            <ThemeProvider theme={MuiTheme}>
              <Topbar />
              <Component {...pageProps} />
            </ThemeProvider>
          </Provider>
        </WalletConnectionProvider>
      </BasicHTML>
    );
  }
}

const BasicHTML = ({ children }) => (
  <React.Fragment>
    <Head>
      <title>SUBMARINE</title>
      <meta {...({ charSet: "UTF-8" } as any)} />
      <meta name="description" content="SUBMARINE" />
      <meta name="keywords" content="submarine" />
      <meta name="author" content="guardian" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/icofont.min.css" />
      <link rel="stylesheet" href="/assets/css/animate.css" />
      <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
      <link rel="stylesheet" href="/assets/css</link>/style.css" />
    </Head>
    {children}
    <style jsx global>
      {globalCSS}
    </style>
  </React.Fragment>
);

const globalCSS = css.global`
  * {
    margin: 0;
    padding: 0;
  }  

  ul {
    margin: 0;
    padding: 0;
  }
  body {
      background: #102841;
      font-family: "Rubik"
    }
  .clearfix {
      clear: both;
  }

  .img_responsive {
      width: 100%;
      max-width: 100%;
      height: auto;
  } 

  .react-dropdown-select-dropdown {
    border: 1px solid #2e4c66 !important;
  }

  .react-dropdown-select {
    padding: 10px 15px;
    background: #0d253a;
    border-color: #0d253a !important;
    color: #fff;
    font-size: 14px;
    border-radius: 8px;
  }
  .react-dropdown-select:hover {
    border-color: transparent;
  }

  .react-dropdown-select-item {
    background: #2e4c66 !important;
    border-bottom: 1px solid #3e566a !important
  }

  .react-dropdown-select-input {
    display: none;
  }

`;

// Change callback to customize store for every request
export default withRedux(() => store)(MyApp);
