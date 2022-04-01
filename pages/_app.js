import {useState, useEffect} from "react";
import "../styles/globals.css";

import Head from "next/head";
import {ParallaxProvider} from 'react-scroll-parallax';

import AuthContext from "../components/utils/AuthContext";

function MyApp({Component, pageProps, children}) {

    const [user, setUser] = useState("");
    const [token, setToken] = useState();

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="shortcut icon" href="/faviconbold.png"/>
                <meta name="author" content="Bold captive portal"/>
            </Head>
            <div className="">
                <Component {...pageProps}/>
            </div>
        </>
    );
}

export default MyApp;
