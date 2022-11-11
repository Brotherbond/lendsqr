import Head from "next/head"

const HTMLHead = ({ title }: { title: string }): JSX.Element =>
  <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Lendsqr,  " />
    <meta name="msapplication-TileColor" content="#F8931D"></meta>
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="Lendsqr" />
    <meta property="og:title" content="" />
    <meta property="og:url" content="https://Lendsqr.com" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="" />
    <meta property="og:image" content="https://Lendsqr.com/favicon.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link rel="icon" href="/favicon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <link rel="shortcut icon" href="/favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
    <title>{title}</title>
  </Head>

export default HTMLHead 