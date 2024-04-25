'use client'
import { useRouter } from "next/navigation"
import { FaArrowLeftLong } from "react-icons/fa6";

function AllEvents() {

    let events = [
        {
            date: "2023",
            allEvents: [
                {
                    name: "RAZZLE DAZZLE",
                    date:"14th feb @5.00pm",
                },
                {
                    name: "RAZZLE DAZZLE",
                    date:"14th feb @5.00pm",
                },
                {
                    name: "RAZZLE DAZZLE",
                    date:"14th feb @5.00pm",
                },
            ]
        },
        {
            date: "2022",
            allEvents: [
                {
                    name: "RAZZLE DAZZLE",
                    date:"14th feb @5.00pm",
                },
                {
                    name: "RAZZLE DAZZLE",
                    date:"14th feb @5.00pm",
                },
                {
                    name: "RAZZLE DAZZLE",
                    date:"14th feb @5.00pm",
                },
            ]
        },
        {
            date: "2021",
            allEvents: [
                {
                    name: "RAZZLE DAZZLE",
                    date:"14th feb @5.00pm",
                },
                {
                    name: "RAZZLE DAZZLE",
                    date:"14th feb @5.00pm",
                },
                {
                    name: "RAZZLE DAZZLE",
                    date:"14th feb @5.00pm",
                },
            ]
        },
        {
            date: "2020",
            allEvents: [
                {
                    name: "RAZZLE DAZZLE",
                    date:"14th feb @5.00pm",
                },
                {
                    name: "RAZZLE DAZZLE",
                    date:"14th feb @5.00pm",
                },
                {
                    name: "RAZZLE DAZZLE",
                    date:"14th feb @5.00pm",
                },
            ]
        },
        {
            date: "2019",
            allEvents: [
                {
                    name: "RAZZLE DAZZLE",
                    date:"14th feb @5.00pm",
                },
                {
                    name: "RAZZLE DAZZLE",
                    date:"14th feb @5.00pm",
                },
                {
                    name: "RAZZLE DAZZLE",
                    date:"14th feb @5.00pm",
                },
            ]
        },
        {
            date: "2018",
            allEvents: [
                {
                    name: "RAZZLE DAZZLE",
                    date:"14th feb @5.00pm",
                },
                {
                    name: "RAZZLE DAZZLE",
                    date:"14th feb @5.00pm",
                },
                {
                    name: "RAZZLE DAZZLE",
                    date:"14th feb @5.00pm",
                },
    ]
        },
    ]

    const router = useRouter()
    const handleClick = () => {
        router.push('/')
    }
    return ( 
        <>
<div className="bg-[#0A0A0A] py-10 px-20 flex flex-col gap-10 justify-center min-h-screen relative">
                                <div>
                                    <button onClick={handleClick} className="flex gap-5">
                                    <FaArrowLeftLong className="text-3xl rotate-45"/>
                                    Back
                                    </button>
                                </div>
            <div className="grid lg:grid-cols-4 grid-col-2 gap-16">
                
            </div>

        </div>
        </>
     );
}

export default AllEvents;