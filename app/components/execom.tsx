'use client'
import { FaArrowRightLong } from "react-icons/fa6";
import Titel from "./title";
import Image from "next/image";
import { useRouter } from "next/navigation";
function Execom() {
    let members = [{
        name: "AKSHAY SAJEEV",
        position: "IEEE CHAIR"
    },
    {
        name: "AKSHAY SAJEEV",
        position: "IEEE VICE-CHAIR"
    }
]

const router = useRouter()
const handleClick = () => {
    router.push('/execom')
}
    return ( 
        <div className="bg-[#0A0A0A] py-10 lg:px-20 px-8 flex gap-10 justify-between min-h-screen relative overflow-hidden">
            <div className="h-full flex items-end">
                <Titel title="execom"/>
            </div>
            <div className="flex flex-col items-start w-3/6 gap-24 justify-center">
                {
                    members.map((member) => {
                        return (
                            
                            <div className="flex items-center gap-20 lg:gap-32">
                                <Image src="/user.png" alt="ieee logo" width={100} height={100} className=""/>
                                <div className="flex flex-col gap-2 lg:gap-12">
                                    <p className="lg:text-4xl sm:xl font-semibold">{member.name}</p>
                                    <p>{member.position}</p>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
            <div className="flex items-end">
                <button onClick={handleClick}>
                <FaArrowRightLong  className="lg:text-6xl text-3xl rotate-45"/>
                </button>
            </div>
        </div>
     );
}

export default Execom;