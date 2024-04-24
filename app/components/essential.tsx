import { FaArrowRightLong } from "react-icons/fa6";
import Titel from "./title";

function Essentials() {
    const options = ['ieee.org','myieee','digital library','ieee RAS','ieee spectrum','ieee region 10','ieee kerala section']
    return ( 
        <div className="bg-[#0A0A0A] py-10 lg:px-20 px-8 flex gap-10 justify-between min-h-screen relative overflow-hidden">
            <div className="h-full flex items-end">
                <Titel title="essentials"/>
            </div>
            <div className="flex flex-col gap-10 justify-center  w-1/2">
                <div className=" text-5xl lg:text-6xl font-semibold py-10">
                SUPPORT
                </div>
                {
                    options.map((option,i) => {
                        return (
                            <button key={i} className="flex items-center font-semibold">
                                <h1 className="text-xl">{option.toUpperCase()}</h1>
                            </button>
                        )
                    })
                }
            </div>
            <div className="flex items-end">
                <button>
                <FaArrowRightLong  className="lg:text-6xl text-3xl rotate-45"/>
                </button>
            </div>
        </div>
     );
}

export default Essentials;
