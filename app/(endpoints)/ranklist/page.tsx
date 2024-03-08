import {Button} from "@/components/ui/button"
import {getProgrammes} from "@/app/lib/ranklist";
import Programmes from "@/components/ranklist/Programmes";
import {DataTable} from "@/components/ranklist/DataTable";


export default async function Page() {

    const programmes = await getProgrammes();

    return (
        <form className="lg:px-10">
            <div className="rounded-lg mx-10">
                <h1 className="text-4xl font-semibold mb-6">Ranklist</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-6">
                    <Programmes programmes={programmes} />
                    <Button className="md:col-start-2 lg:col-start-3 rounded-2xl" variant={"outline"}>Search</Button>
                </div>
                <DataTable />
            </div>
        </form>
    )
}

