import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SubjectSearchData } from "@/types/types";

export default function SubjectCard({ data }: { data: SubjectSearchData }) {
  return (
    <Card className="w-full rounded-2xl border shadow-lg overflow-hidden transform transition-transform hover:scale-95">
      <CardHeader className="rounded-t-2xl border-b border-gray-200 dark:border-gray-800">
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {data.papername} ({data.credits})
        </CardTitle>
        <CardDescription className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
          {data.subcode} | {data.paperid}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-2 p-6">
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <span className="font-medium">Exam Type: </span>
          {data.exam}
        </p>
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <span className="font-medium">Mode: </span>
          {data.mode}
        </p>
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <span className="font-medium">Minor / Major: </span>
          {data.minor} / {data.major}
        </p>
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <span className="font-medium">Scheme ID: </span>
          {data.schemeid}
        </p>
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <span className="font-medium">Type: </span>
          {data.type}
        </p>
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <span className="font-medium">Kind: </span>
          {data.kind}
        </p>
        <p className="grid col-span-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <span className="font-medium">Pass Marks / Max Marks: </span>
          {data.passmarks} / {data.maxmarks}
        </p>
      </CardContent>
    </Card>
  );
}
