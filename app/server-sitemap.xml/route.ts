import { getServerSideSitemap, getServerSideSitemapIndex, ISitemapField } from "next-sitemap";
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
  const resultArray = Array.from(
    { length: Math.ceil(pages/25000) },
    (_, i) => `/${i}/sitemap.xml`
  );

  return getServerSideSitemapIndex(resultArray);
}
