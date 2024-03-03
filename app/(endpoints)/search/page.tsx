import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import React, {SVGProps} from "react";

export default function Page() {
    return (
        <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow">
            <div className="flex flex-col space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Search students by Name</h1>
                    <MicroscopeIcon className="text-gray-500" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <Select className="w-10rem">
                        <SelectTrigger id="degree">
                            <SelectValue placeholder="B. Tech." />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="btech">B. Tech.</SelectItem>
                            <SelectItem value="mtech">M. Tech.</SelectItem>
                            <SelectItem value="mba">MBA</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input className="w-full" placeholder="Enter student name" />
                    <Button className="w-10rem bg-blue-600 text-white">Search</Button>
                </div>
                <p className="text-sm text-gray-500">Please don&apos;t use this for stalking, guys. 🕵️‍♂️</p>
                <div className="grid grid-cols-2 gap-4">
                    <Select className="w-10rem">
                        <SelectTrigger id="college">
                            <SelectValue placeholder="All Colleges" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="college1">College 1</SelectItem>
                            <SelectItem value="college2">College 2</SelectItem>
                            <SelectItem value="college3">College 3</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select className="w-10rem">
                        <SelectTrigger id="branch">
                            <SelectValue placeholder="All Branches" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="cse">Computer Science and Engineering</SelectItem>
                            <SelectItem value="ece">Electronics and Communication Engineering</SelectItem>
                            <SelectItem value="me">Mechanical Engineering</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <Card className="w-10rem">
                        <CardContent>
                            <h3 className="text-lg font-bold">Lakshay Gupta</h3>
                            <p className="text-sm">06011502723</p>
                            <p className="text-sm">Computer Science and Engineering</p>
                            <p className="text-sm">Bharati Vidyapeeth College of Engineering</p>
                        </CardContent>
                    </Card>
                    <Card className="w-full">
                        <CardContent>
                            <h3 className="text-lg font-bold">Lakshay Garg</h3>
                            <p className="text-sm">08114802720</p>
                            <p className="text-sm">Computer Science and Engineering</p>
                            <p className="text-sm">Maharaja Agrasen Institute of Technology</p>
                        </CardContent>
                    </Card>
                    <Card className="w-10rem">
                        <CardContent>
                            <h3 className="text-lg font-bold">Lakshay Goyal</h3>
                            <p className="text-sm">05714802722</p>
                            <p className="text-sm">Computer Science and Engineering</p>
                            <p className="text-sm">Maharaja Agrasen Institute of Technology</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

function MicroscopeIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 18h8" />
            <path d="M3 22h18" />
            <path d="M14 22a7 7 0 1 0 0-14h-1" />
            <path d="M9 14h2" />
            <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
            <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
        </svg>
    )
}
