import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { neon } from "@neondatabase/serverless";

async function getData() {
  const sql = neon(process.env.SITEMAP_DB_URI || "", {
    fetchOptions: { next: { revalidate: 1800 } },
  });
  return (await sql(
    "SELECT reltuples::bigint FROM pg_class WHERE relname = 'sitemap';",
  ));
}

export async function GET(request: Request) {
  const pages = (await getData())[0].reltuples;
  const resultArray: ISitemapField[] = Array.from(
    { length: Math.ceil(pages/25000) },
    (_, i) => ({
      loc: `/${i}/sitemap.xml`,
      changefreq: "daily",
      priority: 0.7,
    }),
  );

  return getServerSideSitemap(resultArray);
}
