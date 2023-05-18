import React from "react";
import Head from "next/head";
interface Prop {
  schemaType?: string;
  openGraphType?: string;
  title?: string;
  content?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO = ({ title, description, image, url }: Prop) => {
  return (
    <Head>
      <title>{title || "Metastream"}</title>
      <meta charSet="UTF-8" />
      <meta
        property="og:description"
        content={
          title !== "Metastream" ? `${title} - Metastream` : "Metastream"
        }
      />
      <meta property="og:keywords" content={`${title} ${description} ${url}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <meta
        name="google-site-verification"
        content="H2_sdcPGrBcBuNGDp4G1qURusEpa5NOSvKrijMKB95c"
      />
      <meta
        name="twitter:title"
        content={title ? `${title} - Metastream` : "Metastream"}
      />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
export default SEO;
