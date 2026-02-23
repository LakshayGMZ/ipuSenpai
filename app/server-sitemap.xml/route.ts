import { getServerSideSitemapIndex } from "next-sitemap";
import { neon } from "@neondatabase/serverless";
import { NextRequest } from "next/server";

export const runtime = "edge";

async function getData() {
  if (!process.env.SITEMAP_DB_URI) {
    return 0;
  }

  const sql = neon(process.env.SITEMAP_DB_URI, {
    fetchOptions: { next: { revalidate: 1800 } },
  });

  const result = await sql(
    "SELECT reltuples::bigint FROM pg_class WHERE relname = 'sitemap';",
  );
  return Number(result[0]?.reltuples ?? 0);
}

export async function GET(request: NextRequest) {
  const pages = await getData();
  const resultArray = Array.from(
    { length: Math.ceil(pages / 25000) },
    (_, i) => `${request.nextUrl.origin}/${i}/sitemap.xml`
  );
  return getServerSideSitemapIndex(resultArray);
}
