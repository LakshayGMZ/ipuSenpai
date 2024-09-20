import { getServerSideSitemap, getServerSideSitemapIndex, ISitemapField } from "next-sitemap";
import { neon } from "@neondatabase/serverless";
import { NextRequest } from "next/server";
import { hostname } from "os";

async function getData() {
  const sql = neon(process.env.SITEMAP_DB_URI || "", {
    fetchOptions: { next: { revalidate: 1800 } },
  });
  return (await sql(
    "SELECT reltuples::bigint FROM pg_class WHERE relname = 'sitemap';",
  ));
}

export async function GET(request: NextRequest) {
  const pages = (await getData())[0].reltuples;
  const resultArray = Array.from(
    { length: Math.ceil(pages/25000) },
    (_, i) => `${request.nextUrl.origin}/${i}/sitemap.xml`
  );
  // This should work
  return getServerSideSitemapIndex(resultArray);
}
