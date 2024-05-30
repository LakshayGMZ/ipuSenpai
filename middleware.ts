import {NextRequest, NextResponse} from 'next/server';
import {neon} from "@neondatabase/serverless";
import {getStudentProfileData} from "@/app/lib/dataFetchServer";
import {some} from "d3-array";

export const config = {
    matcher: ["/ranklist", "/student/:enrollmentID*", '/((?!api|_next/static|_next/image|assets|favicon.ico).*)']
};

async function postData(url: string) {
    const sql = neon(process.env.SITEMAP_DB_URI || "");
    try {
        return await sql(`INSERT INTO sitemap(loc) values($1)`, [url.replaceAll("&", "&amp;")]);
    } catch (e) {
        return null;
    }
}

export async function middleware(request: NextRequest) {
    const enrollment = request.url.split("/").at(-1) || ""
    if (request.nextUrl.pathname.startsWith('/student') && enrollment.match(/(\d+)/)) {
        const studentData = await getStudentProfileData(enrollment || "")
        if (!studentData.enrollment) {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }
    if (some(["localhost", "www.ipusenpai.in", "devel.ipusenpai.in"], i => i === request.nextUrl.hostname)) {
        console.log("GUGUGAGA")
        await postData(request.url);
    }
}