import "./Header.css"
import Link from "next/link";

export default function Header() {

    return (
        <header className={"bg-[#1a202c]"}>
            <nav>
                <h1 className="logo"><a href="#">Ipu Senpai</a></h1>
                <ul>
                    <li><Link key={"College Ranklist"} href={"/ranklist"}>College Ranklist</Link></li>
                    <li><Link key={"Student Profile"} href={"/student"}>Student Profile</Link></li>
                    <li><Link key={"Search"} href={"/search"}>Search</Link></li>
                    <li><Link key={"Statistics"} href={"/statistics"}>Statistics</Link></li>
                </ul>
            </nav>
        </header>
    )
}