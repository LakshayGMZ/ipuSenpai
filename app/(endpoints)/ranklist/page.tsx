import {getProgrammes} from "@/app/lib/ranklist";
import Programmes from "@/components/ranklist/Programmes";


export default async function Page() {

    const programmes = await getProgrammes();

    return (<Programmes programmes={programmes} />

    )
}

