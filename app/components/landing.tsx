'use client'
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaTwitch } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Landing() {
    const container = useRef(null!);
    const { contextSafe } = useGSAP({scope: container});
    const down_animate = contextSafe(() => {
    gsap.to(container.current!, {clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)", duration: 1.5,ease:"power1.in"})
    })
    const top_animate = contextSafe(() => {
    gsap.to(container.current!, {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1.5,ease:"power1.out"})
    })

    let left_option = ['Who we are','Events','Achievements','Say hello']
    let right_option = [
        {
            title:"E-MAIL US",
            content:'ieeesb@mgits.ac.in'
        },
        {
            title:"CHAT WITH US",
            content:'+91 XXX-XXX-XXXX'
        },
        {
            title:"CONNECT WITH US",
            content:'',
        },
    ]
    return ( 

        <>
        
        <div ref={container} style={{clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)"}} className="bg-[#0A0A0A] overflow-hidden py-10 lg:px-20 px-8 flex flex-col gap-10 justify-between h-screen z-10 w-full absolute">
            <div className="flex justify-between w-full">
                <h1 className="lg:text-5xl text-xl font-bold text-white">IEEE SB MITS</h1>
                <button onClick={down_animate} className="flex items-center gap-4 lg:text-3xl text-lg">
                    Close
                    <FaArrowRightLong  className="rotate-45"/>
                </button>
            </div>
            <div className="flex pb-16 lg:p-8 justify-between items-end">
                <div className="flex flex-col lg:gap-24 gap-16">
                    {
                        left_option.map((option,i) => {
                            return (
                                <button key={i} className="flex items-center font-semibold">
                                    <h1 className="lg:text-6xl text-xl font-semibold">{option.toUpperCase()}</h1>
                                </button>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col lg:gap-24 gap-16">
                    {
                        right_option.map((option,i) => {
                            return (
                                <div key={i} className="font-semibold">
                                    <h1 className="lg:text-2xl font-semibold">{option.title}</h1>
                                    {i!=2 ? <p className="lg:text-lg text-sm font-light">{option.content}</p>:<div className="flex gap-5 p-2 lg:text-2xl">
                                    <FaInstagram />
                                    <CiTwitter />
                                    <FaTwitch />
                                    <FaLinkedinIn />
                                        </div>}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        <div className="bg-[#0A0A0A] py-10 lg:px-20 px-8 flex flex-col gap-10 justify-between h-screen relative overflow-hidden">
            <div className="flex justify-between w-full">
                <h1 className="lg:text-5xl text-xl font-bold text-white">IEEE SB MITS</h1>
                <button onClick={top_animate} className="flex items-center gap-4 lg:text-3xl text-lg">
                    Menu
                    <FaArrowRightLong  className="-rotate-45"/>
                </button>
            </div>
            <Image src="/logo.png" alt="ieee logo" width={1024} height={1200} className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"/>
            <div className="flex flex-col text-white gap-8 lg:gap-12 lg:w-1/2 w-[90%]">
                <div className="lg:text-4xl font-semibold tracking-tighter text-2xl">DIGITAL craftmanship SCLUPTING YOU AS A LEADER</div>
                <div className="lg:text-2xl text-lg">Platform for the young minds to explore and experiment technological advancements with professional competencies following ethical standards</div>
            </div>
            <button>
            <FaArrowRightLong  className="lg:text-6xl text-3xl rotate-45"/>
            </button>
        </div>
        </>
     );
}

export default Landing;