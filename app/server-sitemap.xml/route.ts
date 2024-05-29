import {getServerSideSitemap, ISitemapField} from 'next-sitemap'
import {neon} from "@neondatabase/serverless";

async function getData() {
    const sql = neon(process.env.SITEMAP_DB_URI || "", {fetchOptions:{cache: "no-cache"}});
    return await sql("SELECT loc, lastmod::Varchar(10), changefreq, priority from sitemap",) as ISitemapField[];
}

export async function GET(request: Request) {
    const response: ISitemapField[] = await getData();
    return getServerSideSitemap(response)
}