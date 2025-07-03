import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SeoHead = ({ title, description, image = "/default-og.jpg", schema }) => {
  const { pathname } = useLocation();
  const fullUrl = `${import.meta.env.VITE_SITE_URL}${pathname}`;

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${import.meta.env.VITE_SITE_URL}${image}`} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${import.meta.env.VITE_SITE_URL}${image}`} />

      {/* Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SeoHead;
