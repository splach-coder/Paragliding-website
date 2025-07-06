import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SeoHead = ({ title, description, image = "/default-og.jpg", schema }) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const fullUrl = `https://www.flyingtandem.com${pathname}`;
  const imageUrl = `https://www.flyingtandem.com${image}`;

  const translatedTitle = t(title);
  const translatedDescription = t(description);

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{translatedTitle} | Book Now with FlyTandem </title>
      <meta name="description" content={translatedDescription} />

      {/* Open Graph */}
      <meta property="og:title" content={translatedTitle} />
      <meta property="og:description" content={translatedDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={translatedTitle} />
      <meta name="twitter:description" content={translatedDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SeoHead;
