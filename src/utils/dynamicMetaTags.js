import Helmet from "react-helmet";

export const DynamicMetaTags = ({ ogTitle, ogImage, ogUrl, ogDescription }) => {
  return (
    <Helmet>
      <title>{ogTitle}</title>
      <meta name="title" content={ogTitle} />
      <meta name="description" content={ogDescription} />
      {/* Facebook & Linkedin Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://${ogUrl}`} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={`https://${ogUrl}`} />
      <link rel={"shortcut icon"} href={ogImage} />
      {/* Twitter Meta Tags  */}
      <meta property="twitter:url" content={`https://${ogUrl}`} />
      <meta property="twitter:title" content={ogTitle} />
      <meta property="twitter:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
    </Helmet>
  );
};
