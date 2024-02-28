import {ReactNode} from "react";
import Header from "@/components/ui/header/Header";

export default function Layout({children}: {children: ReactNode}) {
    return (
        <div className={"h-full"}>
            <Header/>
            <div>
                {children}
            </div>
        </div>

    )
}