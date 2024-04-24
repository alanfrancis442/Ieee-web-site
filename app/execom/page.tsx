'use client'
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

function Execom() {
    const router = useRouter()
    const handleClick = () => {
        router.push('/')
    }
    let members = [
        {
            name: "William Wordsmith",
            position: "content Lead"
        },
        {
            name: "William Wordsmith",
            position: "content Lead"
        },
        {
            name: "William Wordsmith",
            position: "content Lead"
        },
        {
            name: "William Wordsmith",
            position: "content Lead"
        },
        {
            name: "William Wordsmith",
            position: "content Lead"
        },
        {
            name: "William Wordsmith",
            position: "content Lead"
        },
        {
            name: "William Wordsmith",
            position: "content Lead"
        },
        {
            name: "William Wordsmith",
            position: "content Lead"
        },
    ]
    return ( 
        <>
        <div className="bg-[#0A0A0A] py-10 px-20 flex flex-col gap-10 justify-center h-screen relative">
                                <div>
                                    <button onClick={handleClick} className="flex gap-5">
                                    <FaArrowLeftLong className="text-3xl rotate-45"/>
                                    Back
                                    </button>
                                </div>
            <div className="grid lg:grid-cols-4 grid-col-2 gap-16">
                {
                    members.map((member,i) => {
                        return (
                            <div key={i} className="flex flex-col justify-center items-center gap-12">
                                <Image src="/user.png" alt="ieee logo" width={100} height={100} className=""/>
                                <div className="flex flex-col items-center gap-5">
                                    <p className="text-3xl font-semibold text-center">{member.name}</p>
                                    <p>{member.position}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
        </>
     );
}

export default Execom;