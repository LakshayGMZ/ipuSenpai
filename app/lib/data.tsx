import {ColumnDef} from "@tanstack/react-table";
import {Button} from "@/components/ui/button";
import {ArrowUpDown} from "lucide-react";
import * as React from "react";
import {StudentResults} from "@/types/types";

export const perSemData: StudentResults[] = [
    {
        "enrollment": "00315607223",
        "name": "CHIRAG TYAGI",
        "marks": 778,
        "creditMarks": 1361,
        "totalCreditMarks": 2600,
        "totalCreditMarksWeighted": 143,
        "totalCredits": 26,
        "total": 1200,
        "sgpa": 5.5,
        "percentage": 64.83333,
        "creditsPercentage": 52.346153,
        "subject": [{
            "subcode": "BC-181",
            "subname": "BRIDGE COURSE IN MATHEMATICS",
            "credits": "0",
            "paperid": "099181",
            "internal": "",
            "external": "84",
            "total": "84",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "BC-183",
            "subname": "BRIDGE COURSE IN PROGRAMMING IN C",
            "credits": "0",
            "paperid": "099183",
            "internal": "",
            "external": "82",
            "total": "82",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "ES201",
            "subname": "COMPUTATIONAL METHODS",
            "credits": "4",
            "paperid": "027201",
            "internal": "21",
            "external": "24",
            "total": "45",
            "exam": "REGULAR DEC, 2023",
            "grade": "C",
            "ExamType": "REGULAR"
        }, {
            "subcode": "HS203",
            "subname": "INDIAN KNOWLEDGE SYSTEM",
            "credits": "2",
            "paperid": "027203",
            "internal": "",
            "external": "68",
            "total": "68",
            "exam": "REGULAR DEC, 2023",
            "grade": "A",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC205",
            "subname": "DISCRETE MATHEMATICS",
            "credits": "4",
            "paperid": "027205",
            "internal": "20",
            "external": "23",
            "total": "43",
            "exam": "REGULAR DEC, 2023",
            "grade": "P",
            "ExamType": "REGULAR"
        }, {
            "subcode": "ECC207",
            "subname": "DIGITAL LOGIC AND COMPUTER DESIGN",
            "credits": "4",
            "paperid": "027207",
            "internal": "20",
            "external": "34",
            "total": "54",
            "exam": "REGULAR DEC, 2023",
            "grade": "B",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC209",
            "subname": "DATA STRUCTURES",
            "credits": "4",
            "paperid": "027209",
            "internal": "20",
            "external": "22",
            "total": "42",
            "exam": "REGULAR DEC, 2023",
            "grade": "P",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC211",
            "subname": "OBJECT-ORIENTED PROGRAMMING USING C++",
            "credits": "4",
            "paperid": "027211",
            "internal": "18",
            "external": "25",
            "total": "43",
            "exam": "REGULAR DEC, 2023",
            "grade": "P",
            "ExamType": "REGULAR"
        }, {
            "subcode": "ES251",
            "subname": "COMPUTATONAL METHODS LAB",
            "credits": "1",
            "paperid": "027251",
            "internal": "32",
            "external": "50",
            "total": "82",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "ECC253",
            "subname": "DIGITAL LOGIC AND COMPUTER DESIGN LAB",
            "credits": "1",
            "paperid": "027253",
            "internal": "32",
            "external": "50",
            "total": "82",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC255",
            "subname": "DATA STRUCTURES LAB",
            "credits": "1",
            "paperid": "027255",
            "internal": "32",
            "external": "50",
            "total": "82",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC257",
            "subname": "OBJECT-ORIENTED PROGRAMMING USING C++ LAB",
            "credits": "1",
            "paperid": "027257",
            "internal": "30",
            "external": "41",
            "total": "71",
            "exam": "REGULAR DEC, 2023",
            "grade": "A",
            "ExamType": "REGULAR"
        }]
    }, {
        "enrollment": "00415602722",
        "name": "AASTHA ARORA",
        "marks": 921,
        "creditMarks": 2288,
        "totalCreditMarks": 2600,
        "totalCreditMarksWeighted": 244,
        "totalCredits": 26,
        "total": 1000,
        "sgpa": 9.384615,
        "percentage": 92.1,
        "creditsPercentage": 88,
        "subject": [{
            "subcode": "CIC255",
            "subname": "DATA STRUCTURES LAB",
            "credits": "1",
            "paperid": "027255",
            "internal": "40",
            "external": "60",
            "total": "100",
            "exam": "REGULAR DEC, 2023",
            "grade": "O",
            "ExamType": "REGULAR"
        }, {
            "subcode": "ES201",
            "subname": "COMPUTATIONAL METHODS",
            "credits": "4",
            "paperid": "027201",
            "internal": "25",
            "external": "62",
            "total": "87",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "HS203",
            "subname": "INDIAN KNOWLEDGE SYSTEM",
            "credits": "2",
            "paperid": "027203",
            "internal": "",
            "external": "98",
            "total": "98",
            "exam": "REGULAR DEC, 2023",
            "grade": "O",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC205",
            "subname": "DISCRETE MATHEMATICS",
            "credits": "4",
            "paperid": "027205",
            "internal": "25",
            "external": "60",
            "total": "85",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "ECC207",
            "subname": "DIGITAL LOGIC AND COMPUTER DESIGN",
            "credits": "4",
            "paperid": "027207",
            "internal": "25",
            "external": "57",
            "total": "82",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC209",
            "subname": "DATA STRUCTURES",
            "credits": "4",
            "paperid": "027209",
            "internal": "25",
            "external": "53",
            "total": "78",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC211",
            "subname": "OBJECT-ORIENTED PROGRAMMING USING C++",
            "credits": "4",
            "paperid": "027211",
            "internal": "25",
            "external": "66",
            "total": "91",
            "exam": "REGULAR DEC, 2023",
            "grade": "O",
            "ExamType": "REGULAR"
        }, {
            "subcode": "ES251",
            "subname": "COMPUTATONAL METHODS LAB",
            "credits": "1",
            "paperid": "027251",
            "internal": "40",
            "external": "60",
            "total": "100",
            "exam": "REGULAR DEC, 2023",
            "grade": "O",
            "ExamType": "REGULAR"
        }, {
            "subcode": "ECC253",
            "subname": "DIGITAL LOGIC AND COMPUTER DESIGN LAB",
            "credits": "1",
            "paperid": "027253",
            "internal": "40",
            "external": "60",
            "total": "100",
            "exam": "REGULAR DEC, 2023",
            "grade": "O",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC257",
            "subname": "OBJECT-ORIENTED PROGRAMMING USING C++ LAB",
            "credits": "1",
            "paperid": "027257",
            "internal": "40",
            "external": "60",
            "total": "100",
            "exam": "REGULAR DEC, 2023",
            "grade": "O",
            "ExamType": "REGULAR"
        }]
    }, {
        "enrollment": "00415607223",
        "name": "MOHAMMAD GHUFRAN",
        "marks": 810,
        "creditMarks": 1385,
        "totalCreditMarks": 2600,
        "totalCreditMarksWeighted": 153,
        "totalCredits": 26,
        "total": 1200,
        "sgpa": 5.8846154,
        "percentage": 67.5,
        "creditsPercentage": 53.26923,
        "subject": [{
            "subcode": "CIC257",
            "subname": "OBJECT-ORIENTED PROGRAMMING USING C++ LAB",
            "credits": "1",
            "paperid": "027257",
            "internal": "31",
            "external": "43",
            "total": "74",
            "exam": "REGULAR DEC, 2023",
            "grade": "A",
            "ExamType": "REGULAR"
        }, {
            "subcode": "BC-181",
            "subname": "BRIDGE COURSE IN MATHEMATICS",
            "credits": "0",
            "paperid": "099181",
            "internal": "",
            "external": "95",
            "total": "95",
            "exam": "REGULAR DEC, 2023",
            "grade": "O",
            "ExamType": "REGULAR"
        }, {
            "subcode": "BC-183",
            "subname": "BRIDGE COURSE IN PROGRAMMING IN C",
            "credits": "0",
            "paperid": "099183",
            "internal": "",
            "external": "90",
            "total": "90",
            "exam": "REGULAR DEC, 2023",
            "grade": "O",
            "ExamType": "REGULAR"
        }, {
            "subcode": "ES201",
            "subname": "COMPUTATIONAL METHODS",
            "credits": "4",
            "paperid": "027201",
            "internal": "20",
            "external": "18",
            "total": "40",
            "exam": "REGULAR DEC, 2023",
            "grade": "P",
            "ExamType": "REGULAR"
        }, {
            "subcode": "HS203",
            "subname": "INDIAN KNOWLEDGE SYSTEM",
            "credits": "2",
            "paperid": "027203",
            "internal": "",
            "external": "76",
            "total": "76",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC205",
            "subname": "DISCRETE MATHEMATICS",
            "credits": "4",
            "paperid": "027205",
            "internal": "20",
            "external": "26",
            "total": "46",
            "exam": "REGULAR DEC, 2023",
            "grade": "C",
            "ExamType": "REGULAR"
        }, {
            "subcode": "ECC207",
            "subname": "DIGITAL LOGIC AND COMPUTER DESIGN",
            "credits": "4",
            "paperid": "027207",
            "internal": "20",
            "external": "32",
            "total": "52",
            "exam": "REGULAR DEC, 2023",
            "grade": "B",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC209",
            "subname": "DATA STRUCTURES",
            "credits": "4",
            "paperid": "027209",
            "internal": "20",
            "external": "30",
            "total": "50",
            "exam": "REGULAR DEC, 2023",
            "grade": "B",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC211",
            "subname": "OBJECT-ORIENTED PROGRAMMING USING C++",
            "credits": "4",
            "paperid": "027211",
            "internal": "19",
            "external": "21",
            "total": "40",
            "exam": "REGULAR DEC, 2023",
            "grade": "P",
            "ExamType": "REGULAR"
        }, {
            "subcode": "ES251",
            "subname": "COMPUTATONAL METHODS LAB",
            "credits": "1",
            "paperid": "027251",
            "internal": "30",
            "external": "51",
            "total": "81",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "ECC253",
            "subname": "DIGITAL LOGIC AND COMPUTER DESIGN LAB",
            "credits": "1",
            "paperid": "027253",
            "internal": "32",
            "external": "50",
            "total": "82",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC255",
            "subname": "DATA STRUCTURES LAB",
            "credits": "1",
            "paperid": "027255",
            "internal": "32",
            "external": "52",
            "total": "84",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }]
    }, {
        "enrollment": "00515602722",
        "name": "KASHISH GROVER",
        "marks": 860,
        "creditMarks": 2138,
        "totalCreditMarks": 2600,
        "totalCreditMarksWeighted": 238,
        "totalCredits": 26,
        "total": 1000,
        "sgpa": 9.153846,
        "percentage": 86,
        "creditsPercentage": 82.230774,
        "subject": [{
            "subcode": "ES201",
            "subname": "COMPUTATIONAL METHODS",
            "credits": "4",
            "paperid": "027201",
            "internal": "24",
            "external": "51",
            "total": "75",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "HS203",
            "subname": "INDIAN KNOWLEDGE SYSTEM",
            "credits": "2",
            "paperid": "027203",
            "internal": "",
            "external": "84",
            "total": "84",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC205",
            "subname": "DISCRETE MATHEMATICS",
            "credits": "4",
            "paperid": "027205",
            "internal": "22",
            "external": "66",
            "total": "88",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "ECC207",
            "subname": "DIGITAL LOGIC AND COMPUTER DESIGN",
            "credits": "4",
            "paperid": "027207",
            "internal": "24",
            "external": "53",
            "total": "77",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC209",
            "subname": "DATA STRUCTURES",
            "credits": "4",
            "paperid": "027209",
            "internal": "24",
            "external": "53",
            "total": "77",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC211",
            "subname": "OBJECT-ORIENTED PROGRAMMING USING C++",
            "credits": "4",
            "paperid": "027211",
            "internal": "22",
            "external": "59",
            "total": "81",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "ES251",
            "subname": "COMPUTATONAL METHODS LAB",
            "credits": "1",
            "paperid": "027251",
            "internal": "39",
            "external": "59",
            "total": "98",
            "exam": "REGULAR DEC, 2023",
            "grade": "O",
            "ExamType": "REGULAR"
        }, {
            "subcode": "ECC253",
            "subname": "DIGITAL LOGIC AND COMPUTER DESIGN LAB",
            "credits": "1",
            "paperid": "027253",
            "internal": "36",
            "external": "56",
            "total": "92",
            "exam": "REGULAR DEC, 2023",
            "grade": "O",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC255",
            "subname": "DATA STRUCTURES LAB",
            "credits": "1",
            "paperid": "027255",
            "internal": "39",
            "external": "59",
            "total": "98",
            "exam": "REGULAR DEC, 2023",
            "grade": "O",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC257",
            "subname": "OBJECT-ORIENTED PROGRAMMING USING C++ LAB",
            "credits": "1",
            "paperid": "027257",
            "internal": "36",
            "external": "54",
            "total": "90",
            "exam": "REGULAR DEC, 2023",
            "grade": "O",
            "ExamType": "REGULAR"
        }]
    }, {
        "enrollment": "00515607223",
        "name": "TISHA KASHYAP",
        "marks": 886,
        "creditMarks": 1703,
        "totalCreditMarks": 2600,
        "totalCreditMarksWeighted": 195,
        "totalCredits": 26,
        "total": 1200,
        "sgpa": 7.5,
        "percentage": 73.833336,
        "creditsPercentage": 65.5,
        "subject": [{
            "subcode": "CIC255",
            "subname": "DATA STRUCTURES LAB",
            "credits": "1",
            "paperid": "027255",
            "internal": "37",
            "external": "56",
            "total": "93",
            "exam": "REGULAR DEC, 2023",
            "grade": "O",
            "ExamType": "REGULAR"
        }, {
            "subcode": "ECC253",
            "subname": "DIGITAL LOGIC AND COMPUTER DESIGN LAB",
            "credits": "1",
            "paperid": "027253",
            "internal": "32",
            "external": "52",
            "total": "84",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "ES251",
            "subname": "COMPUTATONAL METHODS LAB",
            "credits": "1",
            "paperid": "027251",
            "internal": "33",
            "external": "52",
            "total": "85",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC211",
            "subname": "OBJECT-ORIENTED PROGRAMMING USING C++",
            "credits": "4",
            "paperid": "027211",
            "internal": "20",
            "external": "48",
            "total": "68",
            "exam": "REGULAR DEC, 2023",
            "grade": "A",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC209",
            "subname": "DATA STRUCTURES",
            "credits": "4",
            "paperid": "027209",
            "internal": "23",
            "external": "41",
            "total": "64",
            "exam": "REGULAR DEC, 2023",
            "grade": "B+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "ECC207",
            "subname": "DIGITAL LOGIC AND COMPUTER DESIGN",
            "credits": "4",
            "paperid": "027207",
            "internal": "21",
            "external": "33",
            "total": "54",
            "exam": "REGULAR DEC, 2023",
            "grade": "B",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC205",
            "subname": "DISCRETE MATHEMATICS",
            "credits": "4",
            "paperid": "027205",
            "internal": "20",
            "external": "46",
            "total": "66",
            "exam": "REGULAR DEC, 2023",
            "grade": "A",
            "ExamType": "REGULAR"
        }, {
            "subcode": "HS203",
            "subname": "INDIAN KNOWLEDGE SYSTEM",
            "credits": "2",
            "paperid": "027203",
            "internal": "",
            "external": "62",
            "total": "62",
            "exam": "REGULAR DEC, 2023",
            "grade": "B+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "ES201",
            "subname": "COMPUTATIONAL METHODS",
            "credits": "4",
            "paperid": "027201",
            "internal": "21",
            "external": "36",
            "total": "57",
            "exam": "REGULAR DEC, 2023",
            "grade": "B+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "BC-183",
            "subname": "BRIDGE COURSE IN PROGRAMMING IN C",
            "credits": "0",
            "paperid": "099183",
            "internal": "",
            "external": "83",
            "total": "83",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "BC-181",
            "subname": "BRIDGE COURSE IN MATHEMATICS",
            "credits": "0",
            "paperid": "099181",
            "internal": "",
            "external": "89",
            "total": "89",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }, {
            "subcode": "CIC257",
            "subname": "OBJECT-ORIENTED PROGRAMMING USING C++ LAB",
            "credits": "1",
            "paperid": "027257",
            "internal": "33",
            "external": "48",
            "total": "81",
            "exam": "REGULAR DEC, 2023",
            "grade": "A+",
            "ExamType": "REGULAR"
        }]
    }]

export const overallData: StudentResults[] = [
    {
        "enrollment": "00496207223",
        "name": "DEEPANSHU SALONIA",
        "marks": 767,
        "creditMarks": 1285,
        "totalCreditMarks": 2600,
        "totalCreditMarksWeighted": 121,
        "totalCredits": 26,
        "total": 1200,
        "cgpa": 4.6538463,
        "percentage": 63.916664,
        "creditsPercentage": 49.423077,
        "semesters": 1,
        "sgpaAllSem": [{"semester": "3", "sgpa": "4.6538463"}],
        "marksPerSemester": [{
            "semester": 3,
            "marks": 767,
            "total": 1200,
            "creditmarks": 1285,
            "totalcreditmarks": 2600,
            "totalcredits": 26,
            "totalcreditmarksweighted": 121
        }]
    }, {
        "enrollment": "00596207223",
        "name": "AZIB",
        "marks": 867,
        "creditMarks": 1520,
        "totalCreditMarks": 2600,
        "totalCreditMarksWeighted": 167,
        "totalCredits": 26,
        "total": 1200,
        "cgpa": 6.423077,
        "percentage": 72.25,
        "creditsPercentage": 58.46154,
        "semesters": 1,
        "sgpaAllSem": [{"semester": "3", "sgpa": "6.423077"}],
        "marksPerSemester": [{
            "semester": 3,
            "marks": 867,
            "total": 1200,
            "creditmarks": 1520,
            "totalcreditmarks": 2600,
            "totalcredits": 26,
            "totalcreditmarksweighted": 167
        }]
    }, {
        "enrollment": "00396207223",
        "name": "MANISH",
        "marks": 920,
        "creditMarks": 1753,
        "totalCreditMarks": 2600,
        "totalCreditMarksWeighted": 202,
        "totalCredits": 26,
        "total": 1200,
        "cgpa": 7.769231,
        "percentage": 76.666664,
        "creditsPercentage": 67.42307,
        "semesters": 1,
        "sgpaAllSem": [{"semester": "3", "sgpa": "7.769231"}],
        "marksPerSemester": [{
            "semester": 3,
            "marks": 920,
            "total": 1200,
            "creditmarks": 1753,
            "totalcreditmarks": 2600,
            "totalcredits": 26,
            "totalcreditmarksweighted": 202
        }]
    }, {
        "enrollment": "00596202722",
        "name": "PULKIT DADWAL",
        "marks": 2408,
        "creditMarks": 5437,
        "totalCreditMarks": 7600,
        "totalCreditMarksWeighted": 612,
        "totalCredits": 76,
        "total": 3200,
        "cgpa": 8.052631,
        "percentage": 75.25,
        "creditsPercentage": 71.539474,
        "semesters": 3,
        "sgpaAllSem": [{"semester": "3", "sgpa": "8.346154"}, {"semester": "2", "sgpa": "8.2"}, {
            "semester": "1",
            "sgpa": "7.6"
        }],
        "marksPerSemester": [{
            "semester": 3,
            "marks": 759,
            "total": 1000,
            "creditmarks": 1930,
            "totalcreditmarks": 2600,
            "totalcredits": 26,
            "totalcreditmarksweighted": 217
        }, {
            "semester": 2,
            "marks": 930,
            "total": 1200,
            "creditmarks": 1810,
            "totalcreditmarks": 2500,
            "totalcredits": 25,
            "totalcreditmarksweighted": 205
        }, {
            "semester": 1,
            "marks": 719,
            "total": 1000,
            "creditmarks": 1697,
            "totalcreditmarks": 2500,
            "totalcredits": 25,
            "totalcreditmarksweighted": 190
        }]
    }, {
        "enrollment": "00496202722",
        "name": "KUMUD KUMAR SHARMA",
        "marks": 2522,
        "creditMarks": 5628,
        "totalCreditMarks": 7600,
        "totalCreditMarksWeighted": 622,
        "totalCredits": 76,
        "total": 3200,
        "cgpa": 8.184211,
        "percentage": 78.8125,
        "creditsPercentage": 74.052635,
        "semesters": 3,
        "sgpaAllSem": [{"semester": "3", "sgpa": "8.384615"}, {"semester": "1", "sgpa": "8.32"}, {
            "semester": "2",
            "sgpa": "7.84"
        }],
        "marksPerSemester": [{
            "semester": 3,
            "marks": 800,
            "total": 1000,
            "creditmarks": 2004,
            "totalcreditmarks": 2600,
            "totalcredits": 26,
            "totalcreditmarksweighted": 218
        }, {
            "semester": 1,
            "marks": 786,
            "total": 1000,
            "creditmarks": 1865,
            "totalcreditmarks": 2500,
            "totalcredits": 25,
            "totalcreditmarksweighted": 208
        }, {
            "semester": 2,
            "marks": 936,
            "total": 1200,
            "creditmarks": 1759,
            "totalcreditmarks": 2500,
            "totalcredits": 25,
            "totalcreditmarksweighted": 196
        }]
    }]

export const columnsOverall: ColumnDef<StudentResults>[] = [
    {
        accessorKey: "enrollment",

        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Enroll No.
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.original.enrollment}</div>,
    },
    {
        accessorKey: "name",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="capitalize">{row.original.name}</div>,
    },
    {
        accessorKey: "marks",
        header: "marks",
        cell: ({row}) => (
            <div className="capitalize">{row.original.marks}/{row.original.total}</div>
        ),
    },
    {
        accessorKey: "cgpa",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    CGPA
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.original.cgpa!.toFixed(2)}</div>,
    },
    {
        accessorKey: "percentage",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    %
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.original.percentage.toFixed(2)}</div>,
    },
    {
        accessorKey: "creditsPercentage",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Credit %
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.original.creditsPercentage.toFixed(2)}</div>,
    },
    {
        accessorKey: "rank",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Rank
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">1</div>,
    }
]


export const columnsSem: ColumnDef<StudentResults>[] = [
    {
        accessorKey: "enrollment",

        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Enroll No.
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.original.enrollment}</div>,
    },
    {
        accessorKey: "name",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="capitalize">{row.original.name}</div>,
    },
    {
        accessorKey: "marks",
        header: "marks",
        cell: ({row}) => (
            <div className="capitalize">{row.original.marks}/{row.original.total}</div>
        ),
    },
    {
        accessorKey: "sgpa",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    SGPA
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.original.sgpa!.toFixed(2)}</div>,
    },
    {
        accessorKey: "percentage",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    %
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.original.percentage.toFixed(2)}</div>,
    },
    {
        accessorKey: "creditsPercentage",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Credit %
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">{row.original.creditsPercentage.toFixed(2)}</div>,
    },
    {
        accessorKey: "rank",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Rank
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({row}) => <div className="lowercase">1</div>,
    }
]