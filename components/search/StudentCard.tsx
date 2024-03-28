import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {StudentSearchCard} from "@/types/types";

export default function StudentCard(
    {
        data
    }: {
        data: StudentSearchCard
    }
) {
    return (
        <Card
            className="w-full rounded-2xl border shadow-lg overflow-hidden transform transition-transform hover:scale-95">
            <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {data.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                    {data.enrollment}
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2 p-6">
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Institute: </span>
                    {data.institute}
                </p>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Programme: </span>
                    {data.programme}
                </p>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Batch: </span>
                    {data.batch}
                </p>
            </CardContent>
        </Card>
    );
}