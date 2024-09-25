import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { neon } from "@neondatabase/serverless";

export const runtime = 'edge';

async function getData(index: number) {
  const sql = neon(process.env.SITEMAP_DB_URI || "", {
    fetchOptions: { next: { revalidate: 1800 } },
  });
  return (await sql(
    `select loc, lastmod::Varchar(10), changefreq, priority from sitemap order by id offset ${index * 25000} limit 25000`,
  )) as ISitemapField[];
}

export async function GET(
  request: Request,
  context: { params: { id: string } },
) {
  const index = context.params.id;
  const response: ISitemapField[] = await getData(parseInt(index));
  return getServerSideSitemap(response);
}
