import {headers} from "next/headers";
import {FloatingNavDesktop} from "@/components/ui/navbar/FloatingNavbarDesktop";

function isMobile(userAgent: string | null): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent || "abcd");
}

export const FloatingNav = (
    props: {
        navItems: {
            name: string;
            link: string;
        }[];
        className?: string;
    }) => {
    const headersList = headers()
    if (isMobile(headersList.get("user-agent")))
        console.log();

    return (
        <FloatingNavDesktop {...props} />
    )
};
