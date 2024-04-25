'use client'
import { useState } from "react";
import { useRouter } from "next/navigation"
import { FaArrowLeftLong } from "react-icons/fa6";

function AllEvents() {

    const [date, setdate] = useState(0);
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

    const changeDate = (i: number) => {
        setdate(i)
    }
    const router = useRouter()
    const handleClick = () => {
        router.push('/')
    }
    return ( 
        <>
<div className="bg-[#0A0A0A] py-10 px-10 lg:px-20 flex flex-col gap-10 justify-between min-h-screen relative">
            <div>
                <button onClick={handleClick} className="flex gap-5">
                    <FaArrowLeftLong className="text-3xl rotate-45" />
                    Back
                </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-12 font-semibold">
                <div className="flex lg:gap-5 gap-1 border-b-2 p-2 lg:p-4 lg:px-7">
                    {
                        events.map((event, i) => {
                            return (
                                <button onClick={() => changeDate(i)} key={i} className="flex flex-col gap-12 border-2 px-3 py-2 rounded-xl hover:text-black hover:bg-white transition-all">
                                    <h1 className=" lg:text-xl text-sm font-semibold">{event.date}</h1>
                                </button>
                            )
                        })
                    }
                </div>
                <div className="p-8 flex lg:flex-row flex-col gap-5">
                    {
                        events[date].allEvents.map((event, i) => {
                            return (
                                <div key={i} className="flex flex-col gap-10 border-2 py-8 px-12 rounded-xl">
                                    <h1 className="text-lg lg:text-xl font-semibold">{event.name}</h1>
                                    <p className="text-md lg:text-lg font-light">{event.date}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </div>
        </>
     );
}

export default AllEvents;